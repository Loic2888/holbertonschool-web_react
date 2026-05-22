/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {

        public getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        public getAvailableTeacher(): string {
            const currentTeacher = this.teacher;

            if (currentTeacher && currentTeacher.experienceTeachingC && currentTeacher.experienceTeachingC > 0) {
                return `Available Teacher: ${currentTeacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
