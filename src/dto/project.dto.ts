import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description?: string; // Opcional
}

export class UpdateProjectDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;
}