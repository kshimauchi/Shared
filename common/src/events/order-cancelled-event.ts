import { Subjects } from "./subjects";


//may want to future proof this like adding a price
//something, we are going with less is better for now
export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        version: number;
        ticket: {
            id: string;
        };
    };
}