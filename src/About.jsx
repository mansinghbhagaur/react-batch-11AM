export default function About(props) {
      console.log(props)
      return (
            <>
                  <h1>About Page</h1>
                  <h1>{props.name}</h1>
            </>
      )
}