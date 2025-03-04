import React, { Component } from "react";

class ClassCom01 extends Component {
      constructor() {
            super();
            this.state = { count: 0, data: [] }
            console.log("constructor Called");
      }

      componentDidMount() {
            try {
                  const FetchData = async () => {
                        const response = await fetch("https://jsonplaceholder.typicode.com/users")
                              .then((res) => res.json()).catch((err) => console.log("Error lkjhgApi", err));
                        // console.log(response, "response")
                        this.setState({ data: response })
                  }
                  FetchData();
            } catch (error) {
                  console.log("Error Api", "api error felled");
            } finally {
                  console.log("finally")
            }
      }

      // componentDidUpdate() {
      //       console.log("componentDidUpdate Called");
      // }

      // componentWillUnmount() {
      //       console.log("componentWillUnmount Called");
      // }

      render() {
            // console.log(this.state.data, "data")
            // const dataFor = this.state.data.forEach((item, i) => {
            //       console.log(item, "foreach")
            // })

            // console.log(dataFor, "datafor")

            // const dataMap = this.state.data.map((item) => item);
            // console.log(dataMap, "dataMap")
            return (
                  <>
                        <h1>Class com 01 {this.state.count}</h1>
                        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
                        <h1>Print Data</h1>




                        <table border={1}>
                              <thead>
                                    <tr>
                                          <th>Id</th>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>City</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          this.state.data.map((item, index) => (
                                                <>
                                                      <tr key={index}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.address.city}</td>
                                                      </tr>
                                                </>
                                          ))
                                    }
                              </tbody>
                        </table>




                  </>
            )
      }
}

export default ClassCom01;