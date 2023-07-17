import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }
    
    body {
        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .handler { 
        svg {
        color: yellow;
        background-color: #0B1222;
        border-radius: 50%;
        padding: 5px;
        height:100%;
        width: 100%;
        }
    }

    .react-modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2;

        &:hover {
            filter: brigtness(0.8);
        }
    }

    .customOverlay {
    backdrop-filter: blur(4px);
}

.customModal {
    padding: 0;
    border-radius: 8px;
}
    
`;
