import {Request, Response} from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response)
{
    CreateCourseService.execute({
        name: "NodeJS", 
        educator: "João"});

    CreateCourseService.execute({
        name: "ReactJS", 
        educator: "João",
        duration: 10});

    return response.json({message: "Ok, está funcionando!"});
}