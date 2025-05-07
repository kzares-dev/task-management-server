import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/model/project.model';
import { CreateProjectDto, UpdateProjectDto } from 'src/dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectModel.find().exec(); 
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = new this.projectModel(createProjectDto);
    return newProject.save();
  }

  async updateProject(projectId: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(projectId, updateProjectDto, { new: true }).exec();
  }

  async deleteProject(projectId: string): Promise<Project> {
    return this.projectModel.findByIdAndDelete(projectId).exec();
  }
}
