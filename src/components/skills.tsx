import { Reveal } from "./custom/reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
    >
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        Skills & Tools
      </h2>
      {/* <p className="leading-7 text-center">
                My primary focus lies in frontend development and backend development. Full-stack is the way to go xD.
            </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start">
        {/* Languages */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Languages
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {/* JavaScript */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">JavaScript</p>
              </div>
              {/* TypeScript */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <rect
                    width="36"
                    height="36"
                    x="6"
                    y="6"
                    fill="#1976d2"
                  ></rect>
                  <polygon
                    fill="#fff"
                    points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                  ></polygon>
                  <path
                    fill="#fff"
                    d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">TypeScript</p>
              </div>
              {/* Java */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#F44336"
                    d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                  ></path>
                  <g>
                    <path
                      fill="#1565C0"
                      d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                    ></path>
                  </g>
                </svg>
                <p className="text-sm text-muted-foreground">Java</p>
              </div>
              {/* Python */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#0277BD"
                    d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                  ></path>
                  <path
                    fill="#FFC107"
                    d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">Python</p>
              </div>

              {/* CSharp */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  className="hover:animate-spin"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#9B4F96"
                    d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                  />
                  <path
                    fill="#68217A"
                    d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                  />
                  <path
                    fill="#fff"
                    d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">CSharp</p>
              </div>
            </div>
          </div>
        </Reveal>
        {/* Frontend */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.1 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Frontend
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {/* CSS */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="hover:animate-spin"
                >
                  <path
                    d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z"
                    opacity=".35"
                  ></path>
                  <path
                    fill="#f2f2f2"
                    d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"
                  ></path>
                  <polygon
                    fill="#2b59a1"
                    points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"
                  ></polygon>
                  <path
                    fill="#40396e"
                    d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"
                  ></path>
                  <polygon
                    fill="#2785bd"
                    points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"
                  ></polygon>
                  <polygon
                    fill="#d9eeff"
                    points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"
                  ></polygon>
                  <polygon
                    fill="#d9eeff"
                    points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"
                  ></polygon>
                  <polygon
                    fill="#d9eeff"
                    points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"
                  ></polygon>
                  <path
                    fill="#f2f2f2"
                    d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">CSS</p>
              </div>

              {/* HTML */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#E65100"
                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                  ></path>
                  <path
                    fill="#FF6D00"
                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">HTML</p>
              </div>

              {/* React */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#80deea"
                    d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                  ></path>
                  <path
                    fill="#80deea"
                    d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                  ></path>
                  <path
                    fill="#80deea"
                    d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                  ></path>
                  <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                </svg>
                <p className="text-sm text-muted-foreground">React</p>
              </div>

              {/* NextJS */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                  className="hover:animate-spin"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"></path>
                    </g>
                  </g>
                </svg>
                <p className="text-sm text-muted-foreground">NextJS</p>
              </div>

              {/* Tailwind CSS */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:animate-spin"
                  width="100"
                  height="100"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38bdf8"
                  />
                </svg>

                <p className="text-sm text-muted-foreground">Tailwind CSS</p>
              </div>

              {/* Bootstrap */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  className="hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="76.079"
                      x2="523.48"
                      y1="10.798"
                      y2="365.95"
                      gradientTransform="translate(1.11 14.613) scale(.24566)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#9013fe" />
                      <stop offset="1" stop-color="#6610f2" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="193.51"
                      x2="293.51"
                      y1="109.74"
                      y2="278.87"
                      gradientTransform="translate(0 52)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#f1e5fc" />
                    </linearGradient>
                    <filter
                      id="c"
                      width="197"
                      height="249"
                      x="161.9"
                      y="135.46"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                  />
                  <path
                    fill="url(#b)"
                    d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                    filter="url(#c)"
                    transform="translate(1.494 2.203) scale(.24566)"
                  />
                </svg>

                <p className="text-sm text-muted-foreground">Bootstrap</p>
              </div>
            </div>
          </div>
        </Reveal>
        {/* Backend */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.2 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Backend
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {/* .Net */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="hover:animate-spin"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <linearGradient
                    id="dot-net-original-a"
                    gradientUnits="userSpaceOnUse"
                    x1="61.631"
                    y1="563.347"
                    x2="62.022"
                    y2="563.347"
                    gradientTransform="matrix(0 149.735 149.735 0 -84296.266 -9188.014)"
                  >
                    <stop offset="0" stop-color="#0994DC" />
                    <stop offset=".35" stop-color="#66CEF5" />
                    <stop offset=".35" stop-color="#66CEF5" />
                    <stop offset=".846" stop-color="#127BCA" />
                    <stop offset=".846" stop-color="#127BCA" />
                    <stop offset="1" stop-color="#127BCA" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-a)"
                    d="M45.288 49.559c4.417 13.507 6.09 37.601 19.006 37.601.982 0 1.977-.096 2.974-.286-11.74-2.737-13.132-26.569-20.297-38.912a61.601 61.601 0 00-1.683 1.597"
                  />
                  <linearGradient
                    id="dot-net-original-b"
                    gradientUnits="userSpaceOnUse"
                    x1="61.705"
                    y1="563.34"
                    x2="62.095"
                    y2="563.34"
                    gradientTransform="matrix(0 153.551 153.551 0 -86442.719 -9435.969)"
                  >
                    <stop offset="0" stop-color="#0E76BC" />
                    <stop offset=".36" stop-color="#36AEE8" />
                    <stop offset=".36" stop-color="#36AEE8" />
                    <stop offset=".846" stop-color="#00ADEF" />
                    <stop offset=".846" stop-color="#00ADEF" />
                    <stop offset="1" stop-color="#00ADEF" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-b)"
                    d="M46.971 47.962c7.165 12.342 8.557 36.174 20.297 38.912a18.621 18.621 0 002.773-.749C59.502 80.961 56.59 57.819 48.453 46.678c-.492.41-.987.839-1.482 1.284"
                  />
                  <path
                    fill="#14559A"
                    d="M57.294 40.623c-.98 0-1.977.096-2.977.286-2.612.493-5.268 1.618-7.944 3.321.73.722 1.427 1.547 2.081 2.448 2.723-2.259 5.427-3.928 8.12-4.932a18.177 18.177 0 013.029-.842 9.393 9.393 0 00-2.309-.281"
                  />
                  <linearGradient
                    id="dot-net-original-c"
                    gradientUnits="userSpaceOnUse"
                    x1="67.486"
                    y1="564.985"
                    x2="67.876"
                    y2="564.985"
                    gradientTransform="matrix(0 -122.178 -122.178 0 69099.289 8331.043)"
                  >
                    <stop offset="0" stop-color="#1C63B7" />
                    <stop offset=".5" stop-color="#33BDF2" />
                    <stop offset="1" stop-color="#33BDF2" stop-opacity=".42" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-c)"
                    d="M78.268 81.366a47.16 47.16 0 003.24-2.84c-4.488-13.443-6.095-37.883-19.101-37.883-.93 0-1.868.087-2.804.26C71.45 43.85 72.968 69.625 78.268 81.366"
                  />
                  <path
                    fill="#3092C4"
                    d="M59.604 40.904a9.355 9.355 0 00-2.311-.282l5.114.019c-.929 0-1.867.086-2.803.263"
                  />
                  <path
                    fill="#1969BC"
                    d="M78.04 84.221a19.441 19.441 0 01-1.466-1.584c-2.188 1.549-4.368 2.724-6.533 3.489.771.376 1.578.656 2.436.829.664.136 1.353.206 2.075.206 2.431 0 4.353-.288 5.987-1.072-.9-.488-1.726-1.118-2.499-1.868"
                  />
                  <linearGradient
                    id="dot-net-original-d"
                    gradientUnits="userSpaceOnUse"
                    x1="61.852"
                    y1="563.281"
                    x2="62.243"
                    y2="563.281"
                    gradientTransform="matrix(0 159.425 159.425 0 -89733.742 -9828.116)"
                  >
                    <stop offset="0" stop-color="#166AB8" />
                    <stop offset=".4" stop-color="#36AEE8" />
                    <stop offset=".4" stop-color="#36AEE8" />
                    <stop offset=".846" stop-color="#0798DD" />
                    <stop offset=".846" stop-color="#0798DD" />
                    <stop offset="1" stop-color="#0798DD" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-d)"
                    d="M56.573 41.748c10.611 5.55 11.534 30.684 20.001 40.889.568-.4 1.13-.824 1.691-1.271-5.3-11.741-6.815-37.519-18.66-40.463-1.011.189-2.02.469-3.032.845"
                  />
                  <linearGradient
                    id="dot-net-original-e"
                    gradientUnits="userSpaceOnUse"
                    x1="61.975"
                    y1="563.367"
                    x2="62.366"
                    y2="563.367"
                    gradientTransform="matrix(0 169.528 169.528 0 -95443.742 -10473.372)"
                  >
                    <stop offset="0" stop-color="#124379" />
                    <stop offset=".39" stop-color="#1487CB" />
                    <stop offset=".39" stop-color="#1487CB" />
                    <stop offset=".78" stop-color="#165197" />
                    <stop offset=".78" stop-color="#165197" />
                    <stop offset="1" stop-color="#165197" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-e)"
                    d="M48.453 46.678c8.137 11.141 11.049 34.284 21.588 39.448 2.166-.765 4.346-1.939 6.533-3.489-8.467-10.205-9.39-35.338-20.001-40.889-2.693 1.002-5.397 2.671-8.12 4.93"
                  />
                  <linearGradient
                    id="dot-net-original-f"
                    gradientUnits="userSpaceOnUse"
                    x1="1006.454"
                    y1="-1412.08"
                    x2="1008.771"
                    y2="-1412.08"
                    gradientTransform="matrix(4.038 0 0 -4.038 -4028.633 -5649.283)"
                  >
                    <stop offset="0" stop-color="#33BDF2" stop-opacity=".698" />
                    <stop offset="1" stop-color="#1DACD8" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-f)"
                    d="M40.083 49.234c-1.275 2.883-2.578 6.674-4.152 11.621 3.131-4.413 6.253-8.214 9.357-11.295a33.873 33.873 0 00-1.382-3.606 46.113 46.113 0 00-3.823 3.28"
                  />
                  <path
                    fill="#2B74B1"
                    d="M45.037 45.121c-.374.268-.751.542-1.13.832.495 1.08.953 2.292 1.38 3.607a66.502 66.502 0 011.684-1.597 22.346 22.346 0 00-1.934-2.842"
                  />
                  <path
                    fill="#125A9E"
                    d="M46.373 44.229c-.445.282-.888.58-1.337.891.695.855 1.333 1.81 1.936 2.844.495-.448.989-.879 1.482-1.287-.654-.9-1.35-1.726-2.081-2.448"
                  />
                  <linearGradient
                    id="dot-net-original-g"
                    gradientUnits="userSpaceOnUse"
                    x1="67.564"
                    y1="565.48"
                    x2="67.954"
                    y2="565.48"
                    gradientTransform="matrix(0 -119.018 -119.018 0 67408.578 8125.832)"
                  >
                    <stop offset="0" stop-color="#136AB4" />
                    <stop
                      offset=".6"
                      stop-color="#59CAF5"
                      stop-opacity=".549"
                    />
                    <stop offset="1" stop-color="#59CAF5" stop-opacity=".235" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-g)"
                    d="M118.751 39.594c-6.001 23.144-18.536 41.734-29.044 46.42h-.021l-.567.243-.069.027-.161.062-.072.03-.263.093-.108.038-.131.043-.126.044-.112.038-.224.068-.096.025-.151.041-.103.028-.165.043-.201.044c.475.175.97.264 1.503.264 9.965 0 20.013-17.858 36.638-47.556h-6.528l.001.005z"
                  />
                  <linearGradient
                    id="dot-net-original-h"
                    gradientUnits="userSpaceOnUse"
                    x1="998.231"
                    y1="-1414.829"
                    x2="1006.826"
                    y2="-1414.829"
                    gradientTransform="matrix(4.038 0 0 -4.038 -4028.633 -5649.283)"
                  >
                    <stop offset="0" stop-color="#05A1E6" stop-opacity=".247" />
                    <stop offset="1" stop-color="#05A1E6" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-h)"
                    d="M33.766 41.563l.019-.016.023-.015h.013l.161-.062.032-.016.042-.017.173-.062h.009l.383-.134.057-.015.164-.049.075-.024.165-.049.063-.017.548-.142.075-.017.16-.031.078-.024.161-.03h.038l.333-.062h.066l.154-.027.087-.015.147-.022.081-.016.358-.032a11.467 11.467 0 00-1.061-.054c-11.223 0-26.685 20.822-33.649 47.788h1.343a390.312 390.312 0 006.062-11.266c4.879-19.1 14.814-32.126 23.64-35.577"
                  />
                  <path
                    fill="#0D82CA"
                    d="M40.083 49.234a46.488 46.488 0 013.823-3.281 17.961 17.961 0 00-.911-1.761c-1.026 1.246-1.964 2.89-2.912 5.042"
                  />
                  <path
                    fill="#0D82CA"
                    d="M41.005 41.72c.733.614 1.39 1.46 1.99 2.473.189-.232.381-.447.58-.649a11.263 11.263 0 00-2.712-1.897l.12.057.022.016"
                  />
                  <linearGradient
                    id="dot-net-original-i"
                    gradientUnits="userSpaceOnUse"
                    x1="67.491"
                    y1="564.359"
                    x2="67.881"
                    y2="564.359"
                    gradientTransform="matrix(0 -121.865 -121.865 0 68797.742 8310.488)"
                  >
                    <stop offset="0" stop-color="#318ED5" />
                    <stop offset="1" stop-color="#38A7E4" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-i)"
                    d="M10.127 77.138c10.233-19.719 15.081-32.199 23.64-35.577-8.825 3.454-18.762 16.479-23.64 35.577"
                  />
                  <path
                    fill="#127BCA"
                    d="M43.574 43.544c-.199.204-.389.417-.58.649.322.538.621 1.124.913 1.76.378-.29.756-.563 1.129-.832a15.351 15.351 0 00-1.462-1.577"
                  />
                  <linearGradient
                    id="dot-net-original-j"
                    gradientUnits="userSpaceOnUse"
                    x1="67.593"
                    y1="564.41"
                    x2="67.984"
                    y2="564.41"
                    gradientTransform="matrix(0 -118.46 -118.46 0 66884.703 8093.017)"
                  >
                    <stop offset="0" stop-color="#05A1E6" />
                    <stop offset="1" stop-color="#05A1E6" stop-opacity=".549" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-j)"
                    d="M14.773 88.315l-.186.022h-.035l-.158.016h-.026l-.376.025h-.039c10.356-.29 15.091-5.475 17.44-12.997 1.785-5.701 3.252-10.505 4.537-14.535-4.338 6.106-8.696 13.384-13.077 21.539-2.112 3.93-5.325 5.572-8.08 5.922"
                  />
                  <linearGradient
                    id="dot-net-original-k"
                    gradientUnits="userSpaceOnUse"
                    x1="68.291"
                    y1="564.525"
                    x2="68.682"
                    y2="564.525"
                    gradientTransform="matrix(0 -100.1 -100.1 0 56536.551 6924.301)"
                  >
                    <stop offset="0" stop-color="#1959A6" />
                    <stop offset=".5" stop-color="#05A1E6" />
                    <stop offset=".5" stop-color="#05A1E6" />
                    <stop offset=".918" stop-color="#7EC5EA" />
                    <stop offset="1" stop-color="#7EC5EA" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-k)"
                    d="M14.773 88.311c2.755-.351 5.968-1.991 8.08-5.923 4.381-8.151 8.741-15.431 13.075-21.538 1.577-4.949 2.878-8.737 4.154-11.621-8.639 8.223-17.311 21.896-25.31 39.077"
                  />
                  <path
                    fill="#05A1E6"
                    d="M10.127 77.139a388.004 388.004 0 01-6.063 11.266h3.904a95.502 95.502 0 012.158-11.264"
                  />
                  <linearGradient
                    id="dot-net-original-l"
                    gradientUnits="userSpaceOnUse"
                    x1="67.892"
                    y1="563.82"
                    x2="68.282"
                    y2="563.82"
                    gradientTransform="scale(-110.211 110.211) rotate(-80 -301.688 322.91)"
                  >
                    <stop offset="0" stop-color="#165096" />
                    <stop offset="1" stop-color="#0D82CA" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-l)"
                    d="M37.073 40.709l-.083.016-.146.021-.086.015-.154.027-.066.016-.333.058h-.038l-.162.032-.081.022-.157.031-.074.018-.549.142-.063.018-.166.049-.075.021-.163.049-.06.016-.381.134-.173.06-.072.03-.161.06-.054.026c-8.558 3.377-13.406 15.857-23.639 35.576A94.655 94.655 0 007.979 88.41h.547l3.755-.016h1.723l.375-.025h.024l.158-.016h.037l.186-.022c8-17.182 16.672-30.854 25.31-39.077.95-2.152 1.887-3.796 2.911-5.04-.6-1.013-1.256-1.861-1.988-2.476l-.021-.016-.122-.059-.121-.061-.117-.057-.139-.058-.108-.047-.227-.095-.097-.036-.169-.068-.091-.03-.235-.081h-.019l-.272-.077-.061-.019-.229-.064-.053-.015a7.851 7.851 0 00-.569-.125l-.059-.016-.247-.04-.049-.015-.292-.039h-.051l-.226-.025-.358.033"
                  />
                  <linearGradient
                    id="dot-net-original-m"
                    gradientUnits="userSpaceOnUse"
                    x1="70.847"
                    y1="566.882"
                    x2="71.237"
                    y2="566.882"
                    gradientTransform="matrix(0 -56.721 -56.721 0 32252.127 4080.282)"
                  >
                    <stop offset="0" stop-color="#05A1E6" />
                    <stop offset=".874" stop-color="#0495D6" />
                    <stop offset="1" stop-color="#0495D6" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-m)"
                    d="M95.311 52.407c-1.97 6.307-3.563 11.51-4.952 15.791 5.403-7.435 10.725-16.787 15.792-27.579-5.913 1.857-9.065 6.107-10.84 11.788"
                  />
                  <linearGradient
                    id="dot-net-original-n"
                    gradientUnits="userSpaceOnUse"
                    x1="61.634"
                    y1="562.213"
                    x2="62.024"
                    y2="562.213"
                    gradientTransform="scale(-132.813 132.813) rotate(80 365.248 244.034)"
                  >
                    <stop offset="0" stop-color="#38A7E4" stop-opacity=".329" />
                    <stop offset=".962" stop-color="#0E88D3" />
                    <stop offset=".962" stop-color="#0E88D3" />
                    <stop offset="1" stop-color="#0E88D3" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-n)"
                    d="M90.53 85.621c-.275.14-.552.273-.823.394 10.508-4.687 23.044-23.277 29.044-46.421h-1.216c-13.788 24.631-18.222 41.12-27.005 46.027"
                  />
                  <path
                    fill="#079AE1"
                    d="M83.668 83.552c2.287-2.791 4.148-7.535 6.691-15.354-2.933 4.029-5.885 7.492-8.84 10.316l-.015.025c.645 1.931 1.352 3.636 2.158 5.012"
                  />
                  <path
                    fill="#1969BC"
                    d="M83.668 83.552c-.778.95-1.603 1.673-2.519 2.209-.2.117-.404.227-.61.327a8.839 8.839 0 003.206 1.011l.524.046h.031l.252.016h.855l.097-.016.189-.016h.092l.205-.022h.017l.063-.015.219-.034h.064l.246-.041h.04l.491-.104c-1.357-.496-2.492-1.667-3.469-3.334"
                  />
                  <path
                    fill="#1E5CB3"
                    d="M64.295 87.161c.982 0 1.976-.096 2.973-.288a18.309 18.309 0 002.773-.747c.771.376 1.579.656 2.435.831.664.135 1.354.205 2.077.205H64.295zM74.553 87.161c2.429 0 4.353-.288 5.986-1.073a8.84 8.84 0 003.206 1.012l.524.045h.031l.252.016h.302-10.301z"
                  />
                  <path
                    fill="#1D60B5"
                    d="M84.854 87.161h.561l.097-.016.191-.016h.092l.204-.022h.017l.062-.016.219-.033.067-.015.247-.04h.039l.491-.104c.475.175.97.264 1.503.264l-3.788.016-.002-.018z"
                  />
                  <path
                    fill="#175FAB"
                    d="M81.511 78.54v-.016a47.16 47.16 0 01-3.24 2.84 36.81 36.81 0 01-1.693 1.271c.476.568.959 1.1 1.468 1.585.772.749 1.597 1.38 2.498 1.867.205-.101.41-.211.609-.327.918-.536 1.741-1.26 2.52-2.209-.806-1.376-1.513-3.082-2.157-5.012"
                  />
                  <linearGradient
                    id="dot-net-original-o"
                    gradientUnits="userSpaceOnUse"
                    x1="61.149"
                    y1="562.654"
                    x2="61.539"
                    y2="562.654"
                    gradientTransform="matrix(0 123.742 123.742 0 -69523.625 -7527.189)"
                  >
                    <stop offset="0" stop-color="#168CD4" />
                    <stop offset=".5" stop-color="#1C87CC" />
                    <stop offset="1" stop-color="#154B8D" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-o)"
                    d="M113.685 39.594h-6.121l-.97.047-.451.966c-5.068 10.793-10.388 20.145-15.791 27.58-2.54 7.818-4.404 12.563-6.69 15.353.977 1.668 2.114 2.84 3.466 3.337l.106-.023h.022l.075-.016.17-.042.101-.029.151-.039.094-.027.226-.068.112-.038.126-.046.13-.041.106-.04.264-.093.073-.027.162-.063.068-.025.568-.243h.02c.271-.119.547-.254.821-.394 8.785-4.908 13.22-21.396 27.008-46.026h-3.851l.005-.003z"
                  />
                  <path
                    fill="#7DCBEC"
                    d="M37.433 40.677l.063.016.16.017h.054l.292.038.049.016.246.041.062.015.567.126.052.016.228.064.063.019.271.077.021.016.237.081.09.029.17.069.096.034.226.094.11.047.136.059.12.057.119.062c.979.48 1.879 1.121 2.713 1.898.308-.323.628-.613.962-.874-1.823-1.293-3.89-2.03-6.271-2.03-.276 0-.552.016-.832.037"
                  />
                  <path
                    fill="#5EC5ED"
                    d="M43.574 43.544c.511.475 1 1.005 1.462 1.577.448-.311.892-.611 1.337-.891a14.13 14.13 0 00-1.839-1.56c-.333.26-.652.552-.96.874"
                  />
                  <g transform="matrix(5.048 0 0 -5.048 -9064.26 2270.61)">
                    <linearGradient
                      id="dot-net-original-p"
                      gradientUnits="userSpaceOnUse"
                      x1="1806.96"
                      y1="336.158"
                      x2="1807.35"
                      y2="336.158"
                      gradientTransform="scale(30.857 -30.857) rotate(22.527 1812.675 -4228.953)"
                    >
                      <stop offset="0" stop-color="#97D6EE" />
                      <stop offset=".703" stop-color="#55C1EA" />
                      <stop offset="1" stop-color="#55C1EA" />
                    </linearGradient>
                    <path
                      fill="url(#dot-net-original-p)"
                      d="M1802.977 441.733l.165.007c.472 0 .881-.146 1.242-.402.381.301.842.406 1.482.406h-3.099l.21-.011"
                    />
                  </g>
                  <g transform="matrix(5.048 0 0 -5.048 -9064.26 2270.61)">
                    <linearGradient
                      id="dot-net-original-q"
                      gradientUnits="userSpaceOnUse"
                      x1="1808.848"
                      y1="335.171"
                      x2="1809.238"
                      y2="335.171"
                      gradientTransform="scale(24.717 -24.717) rotate(-24.385 124.122 4175.416)"
                    >
                      <stop offset="0" stop-color="#7ACCEC" />
                      <stop offset="1" stop-color="#3FB7ED" />
                    </linearGradient>
                    <path
                      fill="url(#dot-net-original-q)"
                      d="M1805.866 441.744c-.64 0-1.1-.105-1.482-.406.126-.089.248-.193.364-.309.531.337 1.056.561 1.574.658.198.037.395.056.589.056h-1.045v.001z"
                    />
                  </g>
                  <linearGradient
                    id="dot-net-original-r"
                    gradientUnits="userSpaceOnUse"
                    x1="61.049"
                    y1="562.706"
                    x2="61.439"
                    y2="562.706"
                    gradientTransform="matrix(0 121.032 121.032 0 -68011.711 -7346.748)"
                  >
                    <stop offset="0" stop-color="#1DA7E7" />
                    <stop offset="1" stop-color="#37ABE7" stop-opacity="0" />
                  </linearGradient>
                  <path
                    fill="url(#dot-net-original-r)"
                    d="M90.359 68.202c1.391-4.284 2.98-9.485 4.954-15.794 1.777-5.684 4.925-9.934 10.835-11.788l.456-.966c-9.636.577-14.14 5.479-16.405 12.738-3.964 12.673-6.365 20.888-8.677 26.123 2.952-2.823 5.904-6.288 8.837-10.313"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">Asp .Net</p>
              </div>

              {/* Node */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#388e3c"
                    d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                  ></path>
                  <path
                    fill="#37474f"
                    d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                  ></path>
                  <path
                    fill="#2e7d32"
                    d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                  ></path>
                  <path
                    fill="#37474f"
                    d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">Node</p>
              </div>
            </div>
          </div>
        </Reveal>
        {/* Database & Cloud */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.3 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Database & Cloud
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {/* MongoDB */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:animate-spin"
                  width="100"
                  height="100"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#439934"
                    d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#45A538"
                    d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#46A037"
                    d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#409433"
                    d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#4FAA41"
                    d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#4AA73C"
                    d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#57AE47"
                    d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#60B24F"
                    d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#A9AA88"
                    d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#B6B598"
                    d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#C2C1A7"
                    d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#CECDB7"
                    d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#DBDAC7"
                    d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#EBE9DC"
                    d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#CECDB7"
                    d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#4FAA41"
                    d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">MongoDB</p>
              </div>

              {/* MySQL */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                  className="hover:animate-spin"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M31.16797,8c-0.46875,-0.01172 -0.87891,0.16797 -1.08984,0.6875c-0.35937,0.87109 0.53516,1.72266 0.85547,2.16797c0.22266,0.30859 0.51172,0.65625 0.67188,1.00391c0.10547,0.23047 0.12109,0.46094 0.21094,0.70313c0.22266,0.59766 0.57813,1.27734 0.86328,1.83203c0.14453,0.28125 0.30469,0.57422 0.48828,0.82422c0.11328,0.15234 0.30469,0.22266 0.33594,0.45703c-0.1875,0.26563 -0.19922,0.67578 -0.30469,1.01172c-0.47656,1.50391 -0.29687,3.375 0.39453,4.48438c0.21484,0.34375 0.71875,1.07422 1.40625,0.79688c0.60156,-0.24609 0.46875,-1.00781 0.64063,-1.68359c0.03906,-0.14844 0.01563,-0.26172 0.09375,-0.36328v0.03125c0.17969,0.36719 0.36328,0.73438 0.54688,1.09766c0.41016,0.65625 1.13281,1.33984 1.74219,1.80469c0.31641,0.23828 0.56641,0.65234 0.97656,0.79297v-0.03125h-0.03125c-0.07812,-0.125 -0.20312,-0.17578 -0.30469,-0.27344c-0.23828,-0.23437 -0.50391,-0.52734 -0.69922,-0.79687c-0.55859,-0.75391 -1.05078,-1.58203 -1.49609,-2.44141c-0.21484,-0.41016 -0.40234,-0.86328 -0.58203,-1.28125c-0.07031,-0.16406 -0.07031,-0.40625 -0.21484,-0.49219c-0.19922,0.30859 -0.48828,0.55469 -0.64062,0.91797c-0.24219,0.57813 -0.27734,1.28516 -0.36719,2.01563c-0.05469,0.01953 -0.03125,0.00391 -0.05859,0.03125c-0.42578,-0.10547 -0.57812,-0.54297 -0.73437,-0.91797c-0.39844,-0.94922 -0.47656,-2.48047 -0.12109,-3.57031c0.08984,-0.28516 0.5,-1.17578 0.33594,-1.4375c-0.07812,-0.26172 -0.34375,-0.41016 -0.48828,-0.60937c-0.18359,-0.24609 -0.36328,-0.57031 -0.48828,-0.85547c-0.32812,-0.74219 -0.63672,-1.60156 -0.98437,-2.35156c-0.16406,-0.35937 -0.44141,-0.71875 -0.67187,-1.03906c-0.25391,-0.35156 -0.53516,-0.60937 -0.73437,-1.03906c-0.06641,-0.14844 -0.16406,-0.39062 -0.05859,-0.54687c0.03125,-0.10547 0.07813,-0.14844 0.18359,-0.18359c0.17578,-0.13672 0.66797,0.04297 0.85547,0.12109c0.48828,0.20313 0.89844,0.39844 1.3125,0.67188c0.19922,0.13281 0.39844,0.38672 0.64063,0.46094h0.27344c0.43359,0.09766 0.91406,0.02734 1.3125,0.15234c0.71094,0.21484 1.34766,0.55078 1.92188,0.91406c1.76172,1.10938 3.20313,2.69141 4.18359,4.57813c0.16016,0.30469 0.23047,0.59766 0.37109,0.91797c0.27734,0.64844 0.63281,1.32031 0.91406,1.95313c0.27734,0.63672 0.55078,1.27344 0.94531,1.80078c0.20703,0.27734 1.01172,0.42969 1.375,0.58203c0.25391,0.10938 0.67578,0.22266 0.91406,0.36719c0.46484,0.27734 0.91016,0.60938 1.34375,0.91797c0.21875,0.15234 0.88281,0.48438 0.91797,0.76172c-1.07422,-0.02734 -1.89453,0.07031 -2.59375,0.36719c-0.19922,0.08594 -0.51953,0.08594 -0.55078,0.33594c0.10547,0.11328 0.125,0.28516 0.21094,0.42578c0.16797,0.26953 0.44922,0.63281 0.70313,0.82422c0.27734,0.20703 0.55859,0.42969 0.85547,0.61328c0.52344,0.31641 1.10938,0.5 1.61719,0.82031c0.29688,0.19141 0.59766,0.42969 0.88672,0.64063c0.14453,0.10938 0.23828,0.27344 0.42578,0.33984v-0.03125c-0.09766,-0.125 -0.12109,-0.29687 -0.21094,-0.42578l-0.40234,-0.40234c-0.38672,-0.51172 -0.87891,-0.96484 -1.40234,-1.33984c-0.41797,-0.30078 -1.35156,-0.70703 -1.52344,-1.19141l-0.03125,-0.03125c0.29297,-0.03125 0.64063,-0.14062 0.91406,-0.21484c0.46094,-0.12109 0.86719,-0.08984 1.33984,-0.21094c0.21484,-0.0625 0.42969,-0.125 0.64453,-0.18359v-0.125c-0.23828,-0.24219 -0.41016,-0.57031 -0.67187,-0.79297c-0.68359,-0.58203 -1.42969,-1.16406 -2.19922,-1.64844c-0.42578,-0.26953 -0.95312,-0.44531 -1.40234,-0.67187c-0.15234,-0.07812 -0.41797,-0.11719 -0.51953,-0.24609c-0.23828,-0.30078 -0.36719,-0.68359 -0.55078,-1.03516c-0.38281,-0.73828 -0.75781,-1.54297 -1.09766,-2.32031c-0.23047,-0.52734 -0.38281,-1.05078 -0.67187,-1.52734c-1.38672,-2.27734 -2.87891,-3.65625 -5.19141,-5.00781c-0.49219,-0.28906 -1.08203,-0.39844 -1.70703,-0.54687c-0.33984,-0.02344 -0.67187,-0.04297 -1.01172,-0.0625c-0.20312,-0.08594 -0.41797,-0.33594 -0.60937,-0.46094c-0.48047,-0.30078 -1.42578,-0.82422 -2.20703,-0.83594zM34.47656,11.3125c-0.22266,-0.00391 -0.38281,0.02734 -0.55078,0.0625v0.03125h0.03125c0.10547,0.21875 0.29688,0.35938 0.42969,0.54688c0.10156,0.21484 0.19922,0.42969 0.30078,0.64453l0.03125,-0.03125c0.1875,-0.13281 0.27734,-0.34766 0.27734,-0.67187c-0.07812,-0.07812 -0.08984,-0.17969 -0.15234,-0.27344c-0.08984,-0.12891 -0.25781,-0.19922 -0.36719,-0.30859zM1.86719,23.99609c-0.30078,0.01172 -0.62891,0.07031 -0.98438,0.18359c-0.59375,0.17969 -0.88672,0.53516 -0.88672,1.25781v7.5625h2.00391v-7.37891l2.77734,6.30859c0.34375,0.78516 0.8125,1.06641 1.73047,1.06641c0.92188,0 1.37109,-0.28125 1.71484,-1.06641l2.77734,-6.14844v7.21875h2v-7.5625c0,-0.72266 -0.28906,-1.07812 -0.88672,-1.25781c-1.42187,-0.44922 -2.37891,-0.0625 -2.80859,0.91016l-2.85156,6.41406l-2.75781,-6.41406c-0.3125,-0.73047 -0.9375,-1.12891 -1.82812,-1.09375zM26.24609,24c-0.78906,0 -3.24609,0.09375 -3.24609,2v1.23438c0,0.875 0.76953,1.58984 2.4375,1.76563c0.1875,0.01172 0.375,0.02734 0.5625,0.02734c0,0 1.94531,-0.03906 2,-0.02734c1.125,0 1,0.875 1,1v1c0,0.13672 -0.03125,1 -1.01172,1h-4.98828v1h5.00781c0.65625,0 1.29297,-0.13672 1.80078,-0.375c0.84375,-0.38672 1.19141,-0.91016 1.19141,-1.59766v-1.42969c0,-1.53516 -1.90625,-1.59766 -3,-1.59766h-2c-0.78516,0 -0.90625,-0.47656 -1,-1v-1c0.09375,-0.39844 0.26953,-0.9375 0.96484,-1h5.03516v-1zM33.98047,24c-1.47656,0.20313 -1.99609,0.9375 -1.99609,2v5c0,0.97266 0.54297,1.55859 1.66016,1.86328c0.375,0.10547 0.71484,0.14844 1.03516,0.14844l2.22656,-0.01172h1.30859l1.11328,1h2.25l-1.54687,-1.39453c0.72656,-0.30078 0.95313,-0.76172 0.95313,-1.625v-4.98047c0,-1.0625 -0.69141,-1.79687 -2.16797,-2zM42,24v6.95703c0,1.20703 0.68359,1.88672 2.49219,2.02344c0.16797,0.00781 0.33984,0.01953 0.50781,0.01953h5v-1h-4.62109c-1.03125,0 -1.37891,-0.43359 -1.37891,-1.05078v-6.94922zM35.17188,25h2.57422c0.67969,0 1.13672,0.54688 1.23828,1c0,0 0.01563,4.65625 0.01563,5c0,0.34375 -0.19141,0.5 -0.19141,0.5l-0.54297,-0.5h-2.26562l1.11328,1h-1.94141c-0.69531,0 -1.08594,-0.51562 -1.1875,-1v-4.89844c0,-0.53125 0.40625,-1.10156 1.1875,-1.10156zM14,27c0.03906,0.03906 0,4.26172 0,4.34375c0.01563,0.875 1.125,1.64063 2.86328,1.65625h3.13672v0.06641c0,0.1875 0.13672,0.8125 -1,0.93359c-0.01172,0 -4.98828,0 -5,0v1h5.21484c0.88281,-0.02734 2.79688,-0.22656 2.78516,-1.75781c0,-0.02734 0.00781,-6.24219 0,-6.24219h-2v5c-0.03125,0 -2.47656,0.00781 -2.96875,0c-0.96484,-0.01562 -1.04687,-0.56641 -1.03125,-0.77734v-4.22266z"></path>
                    </g>
                  </g>
                </svg>
                <p className="text-sm text-muted-foreground">MySQL</p>
              </div>

              {/* SQL SERVER */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="hover:animate-spin"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path d="M55.25 4.15c-.33.11-2.1.68-3.96 1.29-10 3.27-17.08 7.06-18.84 10.06-.67 1.15-.8 2.08-.4 3.01.44 1.05 1.25 1.84 3.47 3.41 1.04.73 2.81 2.26 3.96 3.41 5.5 5.49 8.17 12.22 7.87 19.83-.34 8.56-4.35 17.12-12.03 25.69-2.68 2.99-5.43 5.48-10.71 9.71-4.4 3.52-6.79 5.8-8.42 8.01-4.99 6.8-3.66 12.86 3.96 17.92 6.72 4.47 18.56 8.19 32.51 10.21 4.68.68 9.97 1.11 11.24.92l.89-.13 1.4-2.52c7.08-12.75 10.66-24.77 11.09-37.21.19-5.55-.51-12.12-1.7-15.96-.22-.69-.38-1.28-.35-1.3.02-.02 2-.61 4.4-1.33 12.61-3.76 24.81-6.72 34.89-8.47 1.96-.34 3.64-.69 3.73-.78.54-.53-1.03-2.98-3.58-5.61-9.43-9.73-26.09-17.14-45.64-20.29-3.77-.61-4.23-.83-5.63-2.68-2.22-2.94-4.31-7.97-7.16-17.17-.09-.28-.18-.28-.99-.02zm1.3 3.46c1.1 2.99 1.77 5.34 1.77 6.17v.65l-.93-.11c-5.04-.58-13.08-1.83-14.79-2.29-.44-.12-.69-.29-.61-.42.13-.21 1.84-1.03 6.92-3.34 4.74-2.15 6.54-2.95 6.68-2.96.06 0 .49 1.03.96 2.3zm-10.66 6.31c6.15 1.29 10.63 2.1 11.62 2.1.96 0 .85.08-3.67 2.84-3.49 2.12-3.89 2.32-4.77 2.32h-.96l-2.58-2.62c-3.13-3.17-5.25-5.49-5.25-5.75 0-.11.06-.14.15-.09.08.04 2.55.59 5.46 1.2zm-4.54 2.91c1.51 1.76 2.68 3.24 2.62 3.31-.13.13-4.44-.94-7.08-1.75-2.3-.71-2.58-.95-1.97-1.73.4-.52 3.37-3 3.59-3.01.06-.01 1.33 1.41 2.84 3.18zm19.62 3.65c.6 1.43 1.06 2.59 1.04 2.61-.03.02-8.11-1.23-8.82-1.37-.15-.03 1.22-.96 3.06-2.08s3.41-1.97 3.49-1.88c.08.07.63 1.29 1.23 2.72zm-17.62 2.71c.16.16 2.09 6.36 2 6.44-.03.03-.95-1.03-2.04-2.38-1.1-1.35-2.75-3.24-3.7-4.23l-1.71-1.79 2.67.92c1.46.51 2.72.98 2.78 1.04zm7.72.83c3.35.48 6.13.91 6.18.96.04.05-1.98 1.62-4.5 3.5-2.52 1.87-4.6 3.38-4.63 3.35-.03-.03-.28-.81-.56-1.74-.28-.93-1-2.86-1.59-4.31-.59-1.45-1.05-2.63-1.03-2.63.02 0 2.78.4 6.13.87zm8.42 2.68c.74 1.73 1.03 3.39 1.15 6.7.06 1.78.07 3.23.01 3.23-.06 0-1.12-.37-2.35-.81-2.46-.89-7.28-2.48-7.85-2.59-.25-.05.91-1.16 3.96-3.79 2.38-2.05 4.4-3.72 4.49-3.72.1.01.36.45.59.98zm8.64.42c3.71.76 6.95 1.44 7.21 1.5.37.09-.52.65-4.44 2.8-2.7 1.48-5.76 3.16-6.8 3.75-1.05.59-1.91 1.04-1.93 1.02-.02-.02.09-.57.24-1.23.56-2.4.21-5.4-.91-7.79-.33-.69-.6-1.3-.6-1.35 0-.17.67-.05 7.23 1.3zm10.11 4.53c-.19.84-.6 2.27-.93 3.2-.71 2.04-3.3 7.33-3.65 7.47-.14.06-1.36-.51-2.69-1.25-1.33-.74-3.26-1.72-4.27-2.17l-1.84-.82 6.79-4.35c5.63-3.61 6.8-4.29 6.86-3.97.04.2-.08 1.05-.27 1.89zm4.96-1.55c7.04 2.02 14.47 4.75 14.04 5.16-.09.08-1.01.39-2.04.68-5.31 1.51-12.7 4.06-16.16 5.58-1.07.47-2 .82-2.05.77-.05-.05.37-1.61.94-3.45 1.11-3.63 2.4-8.53 2.4-9.16 0-.28.1-.37.35-.3.18.05 1.31.37 2.52.72zm-30.27 7.3c1.61.53 3.48 1.24 4.17 1.59 1.25.63 1.26.64.9 1.03-.64.71-7.63 7.22-7.83 7.29-.1.04-.18-.95-.18-2.38-.01-2.48-.29-6.95-.5-7.95-.16-.73-.03-.72 3.44.42zm44.7 1.29c-1.54 2.54-4.07 6.16-5.9 8.44-1.87 2.34-5.82 6.74-6.05 6.74-.09 0-.66-.71-1.27-1.59-2.25-3.21-4.86-5.99-7.15-7.61-.22-.15-.35-.32-.3-.37.05-.05 3.81-1.43 8.33-3.07 9.16-3.32 13.19-4.67 13.44-4.49.02.03-.47.9-1.1 1.95zm5.73-.43c6.32 4.41 10.62 7.98 12.18 10.11.39.54.68 1 .64 1.03-.04.03-2.07.26-4.53.5-9.81.97-16.8 1.95-20.5 2.89-.99.25-1.82.44-1.83.43-.02-.02.63-.82 1.46-1.81 4.28-5.13 8.14-10.47 9.58-13.24.38-.73.75-1.33.83-1.33.07-.01 1.04.63 2.17 1.42zm-35.43 5.47c1.21.65 2.14 1.25 2.09 1.35-.09.18-10.76 6.02-10.85 5.94-.02-.02.53-1.77 1.23-3.91s1.38-4.46 1.51-5.17l.24-1.3 1.8.96c1 .53 2.77 1.48 3.98 2.13zm-8.93.34c-1.03 3.57-3.12 8.17-4.07 8.97-.22.18-.65-.07-2.06-1.21-.99-.8-2-1.59-2.27-1.77-.26-.18-.45-.37-.41-.42.73-.73 9.23-7.58 9.27-7.47.03.07-.18.93-.46 1.9zm19.32 6.21c1.61 1.07 5.17 4.26 4.98 4.46-.05.05-3.67 1.23-8.03 2.6-4.36 1.38-9.22 2.94-10.8 3.47-1.59.53-2.89.95-2.9.93-.02-.02 1.09-1.28 2.46-2.81 3.57-3.98 7.24-8.25 8.54-9.93l1.12-1.45 1.47.79c.79.44 2.23 1.32 3.16 1.94zm-8.26-2.29c-.1.13-1.06 1.35-2.14 2.72-1.08 1.36-3.66 4.68-5.76 7.37l-3.81 4.9-.13-.83c-.24-1.61-1.1-4.74-1.59-5.81l-.49-1.07 2.42-1.21c2.5-1.25 7.71-4.08 10.15-5.5 1.54-.9 1.64-.94 1.35-.57zm-20.21 5.92c.99.51 1.92 1.17 1.92 1.38 0 .32-6.45 5.3-6.62 5.11-.04-.04.54-1.19 1.29-2.56.76-1.37 1.52-2.9 1.7-3.42.18-.52.46-.94.6-.94.16 0 .66.2 1.11.43zm5.5 6.13c.45.87.91 3.32.67 3.54-.1.09-2.76 1.35-5.93 2.8-3.17 1.45-7.28 3.4-9.17 4.34-1.88.94-3.31 1.6-3.17 1.48.14-.13 2.21-1.86 4.61-3.86 4.64-3.86 9.93-8.47 10.9-9.49l.58-.61.57.55c.32.3.74.86.94 1.25zm-5.21-.05c-.46.41-2.94 2.58-5.5 4.8C42.08 67 39 69.68 37.8 70.73c-2.42 2.11-2.42 2.11.67-1.92 2.39-3.12 3.64-4.28 7.07-6.58 1.67-1.12 4.99-2.99 5.31-2.99.07-.01-.25.34-.71.75zm24.03 2.12c.13.65.28 2.69.35 4.51l.12 3.32-.77-.36c-2.66-1.23-10.13-5.44-9.85-5.55 1.63-.65 9.7-3.33 9.79-3.24.07.07.23.66.36 1.32zm-6.34 5.94c3.11 1.83 5.68 3.35 5.72 3.38.04.03-.37.37-.88.75-.99.73-11.54 6.18-11.68 6.04-.04-.04.1-.95.31-2 .43-2.12.82-8.44.63-10.45-.06-.71-.04-1.21.06-1.15.11.06 2.73 1.6 5.84 3.43zm-8.6-1.34c.24 1.97-.05 5.93-.58 7.99-.63 2.42-.99 3.43-1.26 3.52-.37.13-2.67-1.97-4.08-3.72-1.42-1.76-3.28-5.08-3-5.35.17-.16 8.39-3.55 8.64-3.56.08-.01.21.5.28 1.12zm-10.08 4.95c.87 1.8 2.86 4.4 5.04 6.6 1.4 1.41 1.75 1.87 1.53 2.01-.98.66-5.35 2.71-8.11 3.79-3.35 1.32-7.7 2.82-7.8 2.7-.04-.04.96-1.86 2.22-4.04 2.73-4.74 6.18-11.44 6.18-11.99 0-.7.29-.42.94.93zm-5.16.11c-.05.14-.47 1.18-.92 2.33-1.94 4.92-5.71 11.6-6.55 11.6-.65 0-1.61-3.89-1.88-7.63l-.14-1.88 4.61-2.33c2.54-1.28 4.69-2.33 4.8-2.33.09-.01.13.1.08.24zm30.78 4.55c.02 2.83-1.17 9.68-1.8 10.37-.26.29-3.19-.79-5.82-2.15-2.36-1.22-6.24-3.63-6.24-3.87 0-.07.59-.37 1.33-.68 1.4-.59 7.91-4.07 10.67-5.7l1.59-.94.14.72c.05.39.12 1.42.13 2.25zm-43.43 3.27c.27 2.24.96 4.98 1.82 7.16.35.89.6 1.66.56 1.7-.34.31-14.19 4.12-16.02 4.41l-.87.14.13-.67c.19-.95 1.53-3.69 2.53-5.17 1.24-1.84 4.31-4.92 6.34-6.35 1.51-1.07 5.15-3.19 5.26-3.07.01.01.13.84.25 1.85zm31.42 4.72c4.28 2.05 5.9 2.76 7.95 3.47l1.57.54-.99.5c-5.61 2.84-15.53 6.89-18.1 7.39-.57.11-.65.08-.54-.2.44-1.15 6.36-13.38 6.47-13.38.07-.01 1.72.76 3.64 1.68zm-7.53-.46c-.3 1.44-1.93 6.11-2.88 8.23-.82 1.84-2.72 5.43-3.06 5.77-.15.15-3.53-1.76-5.13-2.9-1.8-1.28-5.74-5.08-5.63-5.43.04-.13 2.44-1.05 5.33-2.05 6.09-2.1 9.5-3.37 10.49-3.88.96-.5 1.04-.47.88.26zm17.03 6.45c-.06.42-.4 2.26-.77 4.12-1.16 5.83-2.57 9.81-3.47 9.81-1.24 0-9.73-2.06-12.47-3.03-1.86-.66-3.47-1.41-4-1.88-.33-.29-.16-.39 2.28-1.39 7.85-3.2 16.9-7.28 17.88-8.06.57-.45.66-.39.55.43zm-39.72 1.78c-.89 1.59-2.72 4.22-6.2 8.92l-2.97 4-.89-.64c-1.25-.89-3.23-3.05-4.06-4.42-.89-1.47-1.5-3.28-1.57-4.66l-.06-1.07 1.47-.15c1.99-.2 7.55-1.35 11.52-2.39 1.8-.47 3.3-.83 3.34-.8.03.04-.23.58-.58 1.21zm8.63 4.11c.99.71 2.35 1.61 3.05 2.02l1.27.74-.57.24c-.32.13-4.93 1.81-10.26 3.74-9.1 3.29-9.7 3.48-9.95 3.14-.15-.2-.25-.41-.23-.48.02-.07 2.48-3.24 5.47-7.07l5.43-6.95 2 1.67c1.12.93 2.8 2.24 3.79 2.95zm2.24 10.45c-1.99 2.97-3.67 5.48-3.73 5.56-.15.2-3.33-.55-5.71-1.34-2.5-.84-5.58-2.4-6.78-3.43l-.87-.75 1.96-.53c8.03-2.19 18.65-5 18.7-4.96.04.01-1.58 2.48-3.57 5.45zm9.56-4.5c4.25 1.46 8.13 2.29 13.16 2.83l1.39.15-3.75 1.35c-9.36 3.38-16.94 5.75-20.76 6.49-1.07.21-2.05.38-2.16.38-.11 0 .66-1.05 1.71-2.32 2.86-3.49 5.96-7.46 6.78-8.68.4-.59.8-1.09.89-1.09.09.01 1.31.4 2.74.89zm13.95 7.88c-1.61 4.16-2.79 6.69-3.21 6.85-.8.31-11.85-1.32-15.22-2.23-2.24-.61-3.67-1.2-3.25-1.35.16-.06 1.76-.43 3.57-.84 5.85-1.32 14.77-4.03 18.46-5.61.48-.2.9-.35.93-.32.02.03-.55 1.6-1.28 3.5z" />
                </svg>
                <p className="text-sm text-muted-foreground">SQL SERVER</p>
              </div>
            </div>
          </div>
        </Reveal>
        {/* Tools */}
        <Reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.4 },
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Tools
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {/* Git */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#F4511E"
                    d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">Git</p>
              </div>

              {/* Figma */}
              {/* <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                                </svg>
                                <p className="text-sm text-muted-foreground">Figma</p>
                            </div> */}

              {/* Canva */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  x="0px"
                  y="0px"
                  viewBox="0 0 508 508"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  className="hover:animate-spin"
                >
                  <g transform="matrix(.26718 0 0 .26718 0 0)">
                    <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
                    <circle
                      cx="950"
                      cy="950"
                      r="950"
                      fill="url(#prefix___Radial1)"
                    />
                    <circle
                      cx="950"
                      cy="950"
                      r="950"
                      fill="url(#prefix___Radial2)"
                    />
                    <circle
                      cx="950"
                      cy="950"
                      r="950"
                      fill="url(#prefix___Radial3)"
                    />
                    <circle
                      cx="950"
                      cy="950"
                      r="950"
                      fill="url(#prefix___Radial4)"
                    />
                  </g>
                  <path
                    d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z"
                    fill="#fff"
                    fill-rule="nonzero"
                  />
                  <defs>
                    <radialGradient
                      id="prefix___Radial1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"
                    >
                      <stop offset="0" stop-color="#6420ff" />
                      <stop offset="1" stop-color="#6420ff" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="prefix___Radial2"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"
                    >
                      <stop offset="0" stop-color="#00c4cc" />
                      <stop offset="1" stop-color="#00c4cc" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="prefix___Radial3"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"
                    >
                      <stop offset="0" stop-color="#6420ff" />
                      <stop offset="1" stop-color="#6420ff" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="prefix___Radial4"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"
                    >
                      <stop
                        offset="0"
                        stop-color="#00c4cc"
                        stop-opacity=".73"
                      />
                      <stop offset="0" stop-color="#00c4cc" />
                      <stop offset="1" stop-color="#00c4cc" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <p className="text-sm text-muted-foreground">Canva</p>
              </div>

              {/* Github */}
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="github"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 16 16"
                  className="hover:animate-spin"
                >
                  <path
                    fill="#5C6BC0"
                    d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">Github</p>
              </div>

              {/* Github */}
              <div className="text-blue-300 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  width="100"
                  height="100"
                  className="hover:animate-spin"
                >
                  <path d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z" />
                </svg>
                <p className="text-sm text-muted-foreground">Jira</p>
              </div>

              {/* Trello */}
              <div className="text-blue-300 flex flex-col items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  className="hover:animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#23719F"
                    d="M127 16.142C127 7.779 120.221 1 111.858 1H16.142C7.779 1 1 7.779 1 16.142v95.715C1 120.221 7.779 127 16.142 127h95.716c8.363 0 15.142-6.779 15.142-15.143V16.142zM58 99.54c0 3.807-3.286 6.46-7.093 6.46H23.563C19.756 106 17 103.347 17 99.54V23.23c0-3.808 2.756-7.23 6.563-7.23h27.344C54.714 16 58 19.422 58 23.23v76.31zm55-66.456V64.97c0 3.807-2.936 7.03-6.744 7.03h-27.33C75.118 72 72 68.776 72 64.97V22.866C72 19.058 75.118 16 78.926 16h27.33c3.808 0 6.744 3.058 6.744 6.866v10.218z"
                  />
                </svg>
                <p className="text-sm text-muted-foreground">Trello</p>
              </div>
              {/* VS Code */}
              <div className="text-blue-300 flex flex-col items-center justify-center">
                <svg
                  className="hover:animate-spin"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <mask
                    id="a"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                      clip-rule="evenodd"
                    />
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill="#0065A9"
                      d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
                    />
                    <g filter="url(#b)">
                      <path
                        fill="#007ACC"
                        d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                      />
                    </g>
                    <g filter="url(#c)">
                      <path
                        fill="#1F9CF0"
                        d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                      />
                    </g>
                    <path
                      fill="url(#d)"
                      fill-rule="evenodd"
                      d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                      clip-rule="evenodd"
                      opacity="0.25"
                      style={{ mixBlendMode: "overlay" }}
                    />
                  </g>
                  <defs>
                    <filter
                      id="b"
                      width="144.744"
                      height="113.408"
                      x="-8.41115"
                      y="22.5944"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="4.16667" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="overlay"
                        result="effect1_dropShadow_1_36"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_36"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="c"
                      width="56.6667"
                      height="144.007"
                      x="79.6667"
                      y="-8.0035"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="4.16667" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="overlay"
                        result="effect1_dropShadow_1_36"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_36"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="d"
                      x1="63.9222"
                      x2="63.9222"
                      y1="0.329902"
                      y2="127.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-sm text-muted-foreground">VS Code</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
