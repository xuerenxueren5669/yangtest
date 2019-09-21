export class MyFormObj {
  constructor(
    public key:number,
    public errorValid: string,
    public warningValid: string,
    public validating:string,
    public successValid:string,
    public warningHighValid:string,
    public invalidValid:string,
    public datePickerSuccess:string,
    public timePickerWarning:Date,
    public selectError:string,
    public selectValidate:string,
    public inputnumberSuccess:number
    ){}

    public  static  defaultInstance(index:number):MyFormObj{
      return new MyFormObj(index,
        "unavailable choices",
        "Warnings",
        "The content is being validated",
        "The content",
        "Warning",
        "unavailable choice",
        "2019-02-11" ,
        new Date(),
        "Option 1",
        "Option 2",
        12);
    }
}
