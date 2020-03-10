import STUDENTS from '../data/students';

export default {
    Query: {
        students() {
            return STUDENTS;
        },
        //@ts-ignore
        student(parent, args, { client }) {
            return STUDENTS.find(student => student.id === args.id)
        }
    },
};