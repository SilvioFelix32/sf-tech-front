import { useState } from "react";
//components
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { CartItems, Payment } from "../components/StepperSteps";
//styles
import {
  Wrapper,
  Content,
  Theme,
  Button,
  Section,
  StepContent,
  StepTitle,
  StepWrapper,
} from "../styles/pages/shop-cart";

const steps = ["Confirme sua compra", "Pagamento", "Sucesso"];
const stepsContent = [<CartItems />, <Payment />, "Sucesso"];

export default function ShopCart() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1; //step is optional, choose from array of steps
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
        <Content>
          <StepWrapper>
            <StepTitle>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography
                        variant="caption"
                        style={{ fontSize: "10px" }}
                      >
                        Optional
                      </Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps} style={{ width: "200px" }}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </StepTitle>
            {activeStep === stepsContent.length && steps.length ? (
              <StepContent>
                <Button onClick={handleReset}>Resetar</Button>
              </StepContent>
            ) : (
              <StepContent>
                <div style={{ display: "flex", width: "200px" }}>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    {activeStep + 1}
                  </Typography>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Voltar
                  </Button>
                  <div />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip}>
                      Pular
                    </Button>
                  )}
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
                  </Button>
                </div>
              </StepContent>
            )}
          </StepWrapper>

          <Section>content</Section>
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
