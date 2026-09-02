const About=({children})=>{
    console.log(children);
    return (
      <div>
        <h1>Hello I am about section</h1>
        {children}
      </div>
    );
}

export default About;