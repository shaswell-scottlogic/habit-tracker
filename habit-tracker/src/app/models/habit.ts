import { HabitPattern } from "./HabitPattern";

export interface Habit {
    name: string;
    daysCompleted: Date[];
    pattern: HabitPattern;
}
