import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProjectService } from 'src/service/project.service';
import { CreateProjectDto, UpdateProjectDto } from 'src/dto/project.dto';
import { Project } from 'src/model/project.model';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // GET /projects/
  @Get()
  async getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  // POST /projects/
  @Post()
  async createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(createProjectDto);
  }

  // PUT /projects/:projectId
  @Put(':projectId')
  async updateProject(
    @Param('projectId') projectId: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return this.projectService.updateProject(projectId, updateProjectDto);
  }

  // DELETE /projects/:projectId
  @Delete(':projectId')
  async deleteProject(@Param('projectId') projectId: string): Promise<Project> {
    return this.projectService.deleteProject(projectId);
  }
}
