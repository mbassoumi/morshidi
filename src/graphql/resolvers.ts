import CITIES from '../data/cities';
import CLASSES from '../data/classes';
import COURSES from '../data/courses';
import FIELDS from '../data/fields';
import INTERESTS from '../data/interests';
import KEYWORDS from '../data/keywords';
import LEVELS from '../data/levels';
import STUDENTS from '../data/students';
import TEACHERS from '../data/teachers';

export default {
    Query: {
        students() {
            return STUDENTS;
        },
        //@ts-ignore
        student(parent, args, { client }) {
            return STUDENTS.find(student => student.id === args.id)
        },


        teachers() {
            return TEACHERS;
        },
        //@ts-ignore
        teacher(parent, args, { client }) {
            return TEACHERS.find(teacher => teacher.id === args.id)
        },


        cities() {
            return CITIES;
        },
        //@ts-ignore
        city(parent, args, { client }) {
            return CITIES.find(city => city.id === args.id)
        },

        classes() {
            return CLASSES;
        },
        //@ts-ignore
        class(parent, args, { client }) {
            return CLASSES.find(classObj => classObj.id === args.id)
        },

        courses() {
            return COURSES;
        },
        //@ts-ignore
        course(parent, args, { client }) {
            return COURSES.find(course => course.id === args.id)
        },

        fields() {
            return FIELDS;
        },
        //@ts-ignore
        field(parent, args, { client }) {
            return FIELDS.find(field => field.id === args.id)
        },

        interests() {
            return INTERESTS;
        },
        //@ts-ignore
        interest(parent, args, { client }) {
            return INTERESTS.find(interest => interest.id === args.id)
        },

        keywords() {
            return KEYWORDS;
        },
        //@ts-ignore
        keyword(parent, args, { client }) {
            return KEYWORDS.find(keyword => keyword.id === args.id)
        },

        levels() {
            return LEVELS;
        },
        //@ts-ignore
        level(parent, args, { client }) {
            return LEVELS.find(level => level.id === args.id)
        },

    },
};