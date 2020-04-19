export interface ScheduleProps {
    schedule: ScheduleSlot[]
}

export type ScheduleSlot = (string | Date | undefined | typeof NaN)[]