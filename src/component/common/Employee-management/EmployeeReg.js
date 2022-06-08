import React, { Component } from "react";

export class EmployeeReg extends Component {
  constructor() {
    super();
    this.state = {
      employee: [
        {
          id: 108,
          name: "Lankesh",
          birthday: "1990-06-08",
          joining: "1995-03-28",
          city: "Vidisha",
          email: "lankesh@gmail.com",
          phone: 8265009480,
        },
        {
          id: 109,
          name: "Santosh",
          birthday: "1999-08-21",
          joining: "1990-06-08",
          city: "Mandsore",
          email: "santosh@gmail.com",
          phone: 8165009480,
        },
        {
          id: 110,
          name: "Bainu",
          birthday: "1997-02-18",
          joining: "1990-06-08",
          city: "jhabua",
          email: "bainu@gmail.com",
          phone: 9065009480,
        },
      ],

      isDuplicate: false,
      deleteData: {
        status: false,
        id: undefined,
      },
    };
  }
  addEmp = () => {
    var ob = {
      id: this.idbox.value,
      name: this.namebox.value,
      birthday: this.dobbox.value,
      joining: this.joiningbox.value,
      // anniversary:this.annibox.value,
      city: this.citybox.value,
      email: this.emailbox.value,
      phone: this.phonebox.value,
    };
    this.setState({ employee: [...this.state.employee, ob] });
    this.clearBox();
  };
  clearBox = () => {
    this.idbox.value = "";
    this.namebox.value = "";
    this.dobbox.value = "";
    this.joiningbox.value = "";
    // this.annibox.value=""
    this.citybox.value = "";
    this.emailbox.value = "";
    this.phonebox.value = "";
  };

  checkedId = () => {
    var empid = this.idbox.value;
    for (var emp of this.state.employee) {
      if (emp.id === empid) {
        this.setState({ isDuplicate: true });
      }
    }
  };

  deleteEmployee = (id) => {
    // eslint-disable-next-line no-unused-vars
    var e = {
      id: this.idbox.value,
      name: this.namebox.value,
      birthday: this.dobbox.value,
      joining: this.joiningbox.value,
      // anniversary:this.annibox.value,
      city: this.citybox.value,
      email: this.emailbox.value,
      phone: this.phonebox.value,
    };
    this.setState({
      employee: [...this.state.employee].filter(
        (emp) => emp.id !== this.state.deleteData.id
      ),
      deleteData: {
        status: false,
        id: undefined,
      },
    });
  };

  deleteEmp = (id) => {
    this.setState({
      deleteData: {
        status: true,
        id: id,
      },
    });
  };

  render() {
    return (
      <>
        <div>
          <br />
          <section>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            <button
              type="button"
              class="btn btn-success "
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Add Employee
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      User Registration Form
                    </h5>
                    <button
                      type="button"
                      class="close btn btn-danger"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <table
                        align="center"
                        border="2"
                        cellPadding="10px"
                        cellSpacing="10px"
                      >
                        {/* <h3>User Registration Form</h3> */}
                        <br />
                        <fieldset className="text-centre">
                          {/* <legend align="center">User Registaration Form</legend>
                                  <br/><br/> */}
                          <pre>
                            <label> ID :</label>
                            <input
                              ref={(c) => (this.idbox = c)}
                              onBlur={this.checkedId}
                              onFocus={() =>
                                this.setState({ isDuplicate: false })
                              }
                              type="number"
                              name="id"
                              id="id"
                              placeholder="Enter Your ID..."
                              required
                            />
                            <br /> <br />
                            <div>
                              <label> Name :</label>
                              <input
                                ref={(c) => (this.namebox = c)}
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name..."
                                required
                              />
                              <br /> <br />
                            </div>
                            <div>
                              <label for="birthday">Birthday:</label>
                              <input
                                ref={(c) => (this.dobbox = c)}
                                type="date"
                                name="birthday"
                                id="birthday"
                                placeholder="Enter Your bday"
                                required
                              />
                            </div>
                            <div>
                              <br />
                              <label for="birthday">Joining:</label>
                              <input
                                ref={(c) => (this.joiningbox = c)}
                                type="date"
                                name="joining"
                                id="joining"
                                placeholder="Enter Your joiningday"
                                required
                              />
                            </div>
                            <div>
                              <br />
                              <label> City :</label>
                              <input
                                ref={(c) => (this.citybox = c)}
                                type="city"
                                name="city"
                                id="city"
                                placeholder="Enter Your City..."
                                required
                              />
                              <br />
                            </div>
                            <div>
                              <br />
                              <label> Email :</label>
                              <input
                                ref={(c) => (this.emailbox = c)}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Your email..."
                                required
                              />
                            </div>
                            <div>
                              <br />
                              <label> Phone :</label>
                              <input
                                ref={(c) => (this.phonebox = c)}
                                type="Phone"
                                name="phone"
                                id="phone"
                                placeholder="Enter Your Phone..."
                                required
                              />
                            </div>
                            <br />
                            <br />
                            {this.state.isDuplicate ? (
                              <b>"Employee Already Exit !"</b>
                            ) : (
                              <button
                                type="button"
                                class="btn btn-dark"
                                onClick={this.addEmp}
                                // onClick={(e)=>{
                                //   if(window.confirm("Do You Want To add This Record ?"))
                                //   this.addEmp(e)
                                // }}
                              >
                                AddEmployee
                              </button>
                            )}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {this.state.deleteData.status ? (
                              <b align="center">
                                Are you sure to delete Employee Record(
                                {this.state.deleteData.id}) ?&nbsp;&nbsp;
                                <button onClick={this.deleteEmployee}>
                                  {" "}
                                  Yes
                                </button>
                                &nbsp;&nbsp;
                                <button
                                  onClick={() =>
                                    this.setState({
                                      deleteData: {
                                        status: false,
                                        id: undefined,
                                      },
                                    })
                                  }
                                >
                                  Close
                                </button>
                              </b>
                            ) : (
                              ""
                            )}
                          </pre>
                        </fieldset>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <h3 align="center">Employee Record Here</h3>
          <br />
          <table
            align="center"
            border="2"
            cellPadding="10px"
            cellSpacing="10px"
          >
            <thead>
              <tr>
                <th>S.NO</th>
                <th>ID</th>
                <th>Name</th>
                <th>birthday</th>

                <th>JOiningDate</th>
                <th>City</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((emp, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.birthday}</td>
                  <td>{emp.joining}</td>
                  <td>{emp.city}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteEmp(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
        </div>
      </>
    );
  }
}

export default EmployeeReg;
