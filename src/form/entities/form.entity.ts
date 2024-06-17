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
    @Prop({ required: true })
    companyName: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    startedDate: string;

    @Prop({ required: true })
    endDate: string;

    @Prop({ required: true })
    jobTitle: string;

    @Prop({ required: true })
    keyAchievements: string;
}

export const WorkExperienceSchema = SchemaFactory.createForClass(WorkExperience);

@Schema()
export class Education {
    @Prop({ required: true })
    institutionName: string;

    @Prop({ required: true })
    degree: string;

    @Prop({ required: true })
    major: string;

    @Prop({ required: true })
    yearOfGraduation: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);

@Schema()
export class Skill {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
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

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    linkedInProfileUrl: string;

    @Prop({ required: true })
    summary: string;

    @Prop({ required: true })
    yearsOfExperience: string;

    @Prop({ type: [WorkExperienceSchema], default: [] })
    workExperience: WorkExperience[];

    @Prop({ type: [EducationSchema], default: [] })
    education: Education[];

    @Prop({ type: SkillsSchema, required: true })
    skills: Skills;

    @Prop({ required: true })
    awardsAndRecognition: string;

    @Prop({ required: true })
    certifications: string;

    @Prop({ required: true })
    volunteerWork: string;

    @Prop({ required: true })
    foreignLanguagesSpoken: string;

    @Prop({ required: true })
    publications: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
