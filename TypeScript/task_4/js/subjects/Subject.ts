/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        private _teacher!: Teacher;
        public setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }
        public get teacher(): Teacher {
            return this._teacher;
        }
    }
}
