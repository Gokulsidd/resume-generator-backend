import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from 'uuid';

export type FormDocument = Form & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class WorkExperience {
    @Prop( )
    companyName: string;

    @Prop( )
    location: string;

    @Prop( )
    startedDate: string;

    @Prop( )
    endDate: string;

    @Prop( )
    jobTitle: string;

    @Prop( )
    keyAchievements: string;
}

export const WorkExperienceSchema = SchemaFactory.createForClass(WorkExperience);

@Schema()
export class Education {
    @Prop( )
    institutionName: string;

    @Prop( )
    degree: string;

    @Prop( )
    major: string;

    @Prop( )
    yearOfGraduation: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);

@Schema()
export class Project {
    @Prop( )
    projectName: string;

    @Prop( )
    description: string;

    @Prop( )
    duration: string;

    @Prop( )
    technologies: string;

    @Prop( )
    rolesAndResponsibilities: string;

    @Prop( )
    githubRepoLink: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

@Schema()
export class Skill {
    @Prop( )
    name: string;

    @Prop( )
    proficiency: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

@Schema()
export class Skills {
    @Prop({ type: [SkillSchema], default: [] })
    backendLanguages: Skill[];

    @Prop({ type: [SkillSchema], default: [] })
    frontendLanguages: Skill[];

    @Prop({ type: [SkillSchema], default: [] })
    databases: Skill[];

    @Prop({ type: [SkillSchema], default: [] })
    cloudTechnologies: Skill[];

    @Prop({ type: [SkillSchema], default: [] })
    softSkills: Skill[];
}

export const SkillsSchema = SchemaFactory.createForClass(Skills);

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Form {
    @Prop({
        type: String,
        unique: true,
        default: uuid,
    })
    userId: string;

    @Prop( )
    fullName: string;

    @Prop( )
    email: string;

    @Prop( )
    phoneNumber: string;

    @Prop( )
    linkedInProfileUrl: string;

    @Prop( )
    summary: string;

    @Prop( )
    yearsOfExperience: string;

    @Prop({ type: [WorkExperienceSchema], default: [] })
    workExperience: WorkExperience[];

    @Prop({ type: [EducationSchema], default: [] })
    education: Education[];

    @Prop({ type: [ProjectSchema], default: [] })
    projects: Project[];

    @Prop({ type: SkillsSchema})
    skills: Skills;

    @Prop( )
    awardsAndRecognition: string;

    @Prop( )
    certifications: string;

    @Prop( )
    volunteerWork: string;

    @Prop( )
    foreignLanguagesSpoken: string;

    @Prop( )
    publications: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
