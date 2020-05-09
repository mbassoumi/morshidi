import CITIES from '../data/cities';
import Group_classes from '../data/group_classes';
import COURSES from '../data/courses';
import FIELDS from '../data/fields';
import KEYWORDS from '../data/search_keywords';
import LEVELS from '../data/levels';
import STUDENTS from '../data/students';
import TEACHERS from '../data/teachers';
import REVIEWS from "../data/partial/reviews";

export default {
    Query: {

        teachers() {
            return TEACHERS.map((teacher) => {
                return {
                    ...teacher,
                    followers: STUDENTS,
                    courses: COURSES,
                    rating: {
                        ...teacher.rating,
                        reviews: REVIEWS
                    }
                }
            })
        },

        //@ts-ignore
        user(parent, args, {client}) {
            console.log('args.id', args.id);
            //@ts-ignore
            let user = TEACHERS.find(teacher => teacher.user_account.id === args.id)
            if (!user) {
                //@ts-ignore
                user = STUDENTS.find(student => student.user_account.id === args.id)
            }
            return user;
        },

        students() {
            return STUDENTS;
        },
        //@ts-ignore
        student(parent, args, {client}) {
            return STUDENTS.find(student => student.user_account?.id === args.id)
        },


        //@ts-ignore
        teacher(parent, args, {client}) {
            return TEACHERS.find(teacher => teacher.user_account?.id === args.id)
        },


        cities() {
            return CITIES;
        },
        //@ts-ignore
        city(parent, args, {client}) {
            return CITIES.find(city => city.id === args.id)
        },

        classes() {
            return Group_classes;
        },
        //@ts-ignore
        class(parent, args, {client}) {
            return Group_classes.find(classObj => classObj.id === args.id)
        },

        courses() {
            return COURSES;
        },
        //@ts-ignore
        course(parent, args, {client}) {
            //@ts-ignore
            return COURSES.find(course => course.id === args.id)
        },

        fields() {
            return FIELDS;
        },
        //@ts-ignore
        field(parent, args, {client}) {
            return FIELDS.find(field => field.id === args.id)
        },

        interests() {
            return FIELDS;
        },
        //@ts-ignore
        interest(parent, args, {client}) {
            return FIELDS.find(interest => interest.id === args.id)
        },

        keywords() {
            return KEYWORDS;
        },
        //@ts-ignore
        keyword(parent, args, {client}) {
            return KEYWORDS.find(keyword => keyword.id === args.id)
        },

        levels() {
            return LEVELS;
        },
        //@ts-ignore
        level(parent, args, {client}) {
            return LEVELS.find(level => level.id === args.id)
        },

    },
};