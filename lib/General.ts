import { global } from "./Global";

//To provide all re-usable functions / methods related to the whole application
export class general extends global {
    /***********User defined Re-usable functions and methods************** */
    async openApplication(){
        await this.page.goto(this.url);
        console.log("Application opened successfully");
    }
    async Login(){
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.button_login).click();
        console.log("Login Completed");
    }
    async Logout(){
        await this.page.locator(this.link_logout).click();
        console.log("Logout Completed");
    }
    async addNewEmployee(){
        const frame = await this.page.frameLocator(this.empInfo_frame);
        await frame.locator(this.button_addEmployee).click();
        await frame.locator(this.textbox_empfirstName).fill(this.empfirstname);
        await frame.locator(this.textbox_emplastName).fill(this.emplastname);
        await frame.locator(this.button_saveEmployee).click();
        console.log("New Employee added successfully");
    }
    async waitStmt(){
        await this.page.waitForTimeout(3000);
        console.log("Waited for 3 seconds");
    }
}