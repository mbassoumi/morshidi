import {GroupClassSchedule} from "../../components/class/group_class/types";
import CLASS_TIMES from "./class_times";

const TYPE_NAME = 'GroupClassSchedule';

const GROUP_CLASS_SCHEDULES: GroupClassSchedule[] = [
    {
        __typename: TYPE_NAME,
        saturday: CLASS_TIMES[0],
        monday: CLASS_TIMES[0],
        wednesday: CLASS_TIMES[0],
    },
    {
        __typename: TYPE_NAME,
        saturday: CLASS_TIMES[1],
        monday: CLASS_TIMES[1],
        wednesday: CLASS_TIMES[1],
    },
    {
        __typename: TYPE_NAME,
        saturday: CLASS_TIMES[2],
        monday: CLASS_TIMES[2],
        wednesday: CLASS_TIMES[2],
    },
    {
        __typename: TYPE_NAME,
        saturday: CLASS_TIMES[3],
        monday: CLASS_TIMES[3],
        wednesday: CLASS_TIMES[3],
    },
    {
        __typename: TYPE_NAME,
        saturday: CLASS_TIMES[4],
        monday: CLASS_TIMES[4],
        wednesday: CLASS_TIMES[4],
    },
    {
        __typename: TYPE_NAME,
        saturday: CLASS_TIMES[5],
        monday: CLASS_TIMES[5],
        wednesday: CLASS_TIMES[5],
    },
    {
        __typename: TYPE_NAME,
        sunday: CLASS_TIMES[6],
        tuesday: CLASS_TIMES[6],
        thursday: CLASS_TIMES[6],
    },
    {
        __typename: TYPE_NAME,
        sunday: CLASS_TIMES[7],
        tuesday: CLASS_TIMES[7],
        thursday: CLASS_TIMES[7],
    },
    {
        __typename: TYPE_NAME,
        sunday: CLASS_TIMES[8],
        tuesday: CLASS_TIMES[8],
        thursday: CLASS_TIMES[8],
    },
    {
        __typename: TYPE_NAME,
        sunday: CLASS_TIMES[9],
        tuesday: CLASS_TIMES[9],
        thursday: CLASS_TIMES[9],
    },
    {
        __typename: TYPE_NAME,
        sunday: CLASS_TIMES[10],
        tuesday: CLASS_TIMES[10],
        thursday: CLASS_TIMES[10],
    },
    {
        __typename: TYPE_NAME,
        sunday: CLASS_TIMES[11],
        tuesday: CLASS_TIMES[11],
        thursday: CLASS_TIMES[11],
    },


];

export default GROUP_CLASS_SCHEDULES;