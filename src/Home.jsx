import React from "react";

export class Home extends React.Component {
      constructor(props) {
            super(props);
      }
      render() {
            const { title, name, id } = this.props;
            return (
                  <>
                        <h1>home page</h1>
                        <h1>{title}</h1>
                        <h1>{name}</h1>
                        <h1>{id}</h1>
                  </>
            )
      }
}