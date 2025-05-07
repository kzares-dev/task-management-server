import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description?: string;

  @IsBoolean()
  completed?: boolean;
}

export class UpdateTaskDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsBoolean()
  completed?: boolean;
}
