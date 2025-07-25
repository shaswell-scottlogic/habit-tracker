export interface Habit {
    name: string;
    daysCompleted: Date[]; // TODO: optimise this? limit to x days in teh past
    // could also use streak, but not with complex patterns
    // some kind of pattern data structure
}
