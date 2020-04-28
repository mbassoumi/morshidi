import {gql} from 'apollo-boost';

export default gql`
    #    TODO: check Date scalor serilazation
    #    TODO: need schedule for teacher and student

    scalar Date
    scalar Timestamp

    enum Gender {
        MALE
        FEMALE
    }

    type Avatar {
        thumb: String!
        uri: String!
    }

    type City {
        id: ID!
        name: String!
    }

    type Address {
        city: City!
    }

    enum ContactInfoType {
        EMAIL
        PHONE
    }

    type ContactInfo {
        id: ID!
        type: ContactInfoType!
        value: String!
        confirmed: Boolean!
        primary: Boolean!
    }

    enum UserRole {
        STUDENT
        TEACHER
        ADMIN
        SALE_POINT
    }

    type Level {
        id: ID!
        name: String!
    }

    type Field {
        id: ID!
        name: String!
    }

    type SearchKeyword {
        id: ID!
        name: String!
    }

    type Review {
        text: String!,
        rate: Int!,
        user: User!
    }
    
    type Rating {
        count: Int!
        average: Float!
        reviews: [Review!]!
    }

    type GroupClassSettings {
        online: Boolean!
        min_students: Int!
        max_students: Int!
        price_per_student: Float!
        address: Address
        address_details: String
    }


    type ClassTime {
        start_time: Timestamp!
        end_time: Timestamp!
    }

    type GroupClassSchedule {
        saturday: ClassTime
        sunday: ClassTime
        monday: ClassTime
        tuesday: ClassTime
        wednesday: ClassTime
        thursday: ClassTime
        friday: ClassTime
    }

    enum GroupClassEnrollmentStatus {
        REQUESTED
        CONFIRMED
        ON_WAITING_LIST
        CANCELED
        DECLINED
        WITHDRAWN
    }

    type GroupClassEnrollment {
        id: ID!
        student: Student!
        group_class: GroupClass!
        status: GroupClassEnrollmentStatus!
    }

    type PrivateClass {
        id: ID!
        teacher: Teacher!
        student: Student!
        time: ClassTime!
    }

    type UserAccount {
        id: ID!
        username: String!
        first_name: String!
        last_name: String!
        avatar: Avatar!,
        date_of_birth: Date!,
        gender: Gender!,
        address: Address!,
        contact_info: [ContactInfo!]!
        roles: [UserRole!]!
    }

    union SlotDetails = PrivateClass | GroupClass


    type ScheduleSlot {
        time: ClassTime!
        details: SlotDetails!
    }

    type UserSchedule {
        start_date: Date
        end_date: Date
        slots: [ScheduleSlot!]!
        user: User
    }


    type Teacher {
        user_account: UserAccount!
        rating: Rating!,
        bio: String
        followers: [Student!]!
        private_classes: [PrivateClass!]!
        courses: [Course!]!
        levels: [Level!]!
        fields: [Field!]!
    }

    type Student {
        user_account: UserAccount!
        group_classes: [GroupClass!]!
        following: [Teacher!]!
        level: Level!
        fields: [Field!]!
    }

    type GroupClass {
        id: ID!
        course: Course!
        nickname: String!
        start_date: Date!
        end_date: Date!
        class_settings: GroupClassSettings!
        schedule: GroupClassSchedule!
        enrollments: [GroupClassEnrollment!]!
    }

    type Course {
        id: ID!
        title: String!
        field: Field!
        level: Level!
        search_keywords: [SearchKeyword!]!
        description: String!
        requirements: [String!]!
        teacher: Teacher!
        rating: Rating!
        group_classes: [GroupClass!]!
        default_online_class_settings: GroupClassSettings
        default_physical_class_settings: GroupClassSettings
    }

    union User = Teacher | Student

        type Query {
            teachers: [Teacher!]!
            user(id: ID!): User
#            teacher(id: ID!): Teacher
    #        students: [Student!]!
    #        student(id: ID!): Student
    #        classes: [Class!]!
    #        class(id: ID!): Class
    #        courses: [Course!]!
    #        course(id: ID!): Course
    #
    #        fields: [Field!]!
    #        levels: [Level!]!
    #        interests: [Interest!]!
    #        cities: [City!]!
    #        keywords: [Keyword!]!
        }
`;
