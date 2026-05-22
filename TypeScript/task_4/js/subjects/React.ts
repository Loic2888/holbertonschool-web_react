/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {

        public getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        public getAvailableTeacher(): string {
            const currentTeacher = this.teacher;

            if (currentTeacher && currentTeacher.experienceTeachingReact && currentTeacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${currentTeacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
