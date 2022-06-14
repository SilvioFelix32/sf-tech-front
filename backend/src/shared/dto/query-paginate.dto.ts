/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsInt, IsOptional, Max, Min } from "class-validator";

export class QueryPaginateDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    @Min(1)
    page?: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    @Max(+process.env.API_RESPONSE_LIMIT || 20)
    limit?: number;
}