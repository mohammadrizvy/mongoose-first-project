// import { Schema, model, connect } from 'mongoose'

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}


export type UserName = {
  firstName: string
  middlename: string
  lastName: string
}

export type localGuardian = {
    name : string;
    occupation : string;
    contractNo : string;
    address : string;

}


export type Student = {
    id: string;
    name : UserName;
    gender: "male" | "female";
    dateOfBirth?: string;
    email : string;
    contactNo : string;
    emergencyContact: string;
    bloodGroup ? : "A+"| "A-" |  "B+"| "B-" | "AB+"| "AB-" | "O+"| "O-"  ;
    presentAddress : string;
    permanentAddress : string;
    guardian: Guardian;
    localGuardian :  localGuardian; 
    profileImage ?: string;
    isActive : "active"|"inActive"

}

