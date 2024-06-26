import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPerroDuerme = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={640}
      height={800}
      style={{
         overflow: 'hidden',
         display: 'block',
      }}
      viewBox='0 0 640 800'
      {...props}
   >
      <path
         fill='hsl(0, 0%, 0%)'
         d='m405.74 540.353 6.215-8.568q6.214-8.568 12.434-16.08 6.221-7.513 10.404-12.747t12.465-16.062 14.12-18.929q5.84-8.1 10.272-14.564 4.433-6.463 8.028-11.87 3.594-5.408 5.967-9.288t5.709-9.493 5.634-9.713q2.298-4.1 4.893-7.852t7.165-6.132 10.061-1.865 9.664 5.866q4.173 5.35 5.499 9.163t1.415 11.94-1.03 17.368q-1.117 9.241-2.703 18.35-1.585 9.108-4.397 20.175t-5.796 21.217q-2.984 10.15-7.404 20.285-4.421 10.135-7.294 16.916t-4.867 11.537-4.395 9.159-5.413 10.228-4.785 10.373-2.376 8.562q-.602 4.016-.177 8.887.424 4.872-1.393 10.237-1.818 5.365-8.506 8.07t-16.864 2.055-23.263-1.58-26.931-2.42-25.192-2.86-21.44-3.2q-10.092-1.828-20.167-4.362-10.074-2.533-16.085-3.81-6.01-1.277-10.395-2.395-4.384-1.117-8.967-2.692t-6.975-5.817-.072-11.68T303.441 566t6.72-6.378 8.252-4.918 11.753-3.064q7.9-1.2 12.017-.384 4.117.815 7.957 2t9.577 4.208 9.726 6.66q3.988 3.638 6.693 7.294 2.706 3.656 3.685 9.822t-5.728 12.274-10.708 7.232q-4 1.125-8.65 1.556t-9.897.121-9.994-1.353q-4.747-1.041-8.761-2.38-4.014-1.34-8.807-3.135t-9.054-5.961-5.27-11.159q-1.009-6.992.187-10.982t4.82-8.246 6.874-6.902 7.779-4.766 10.48-2.677 10.137-.158 8.275 1.56 9.376 4.138 7.67 11.45-2.032 13.595-13.768 7.38-20.497 2.895-22.843-.533-19.977-3.27-14.73-4.796-10.53-4.684-9.517-8.146q-5.436-6.15-6.689-10.062t-1.246-9.068.756-12.788q.75-7.632 1.2-14.151t.27-12.14q-.179-5.62-.697-9.815t-3.645-.347-6.995 8.759-8.393 10.607-7.655 10.423-5.064 8.387-4.65 9.112q-2.718 5.45 2.286 7.057t7.672-3.335q2.669-4.942 1.452-12.56-1.216-7.619-2.879-11.57-1.662-3.953-5.945-9.121-4.282-5.168-10.304-7.99-6.022-2.82-12.654-5.327-6.633-2.508-13.32-7.66-6.685-5.152-8.867-9.494-2.18-4.341-1.933-11.457.249-7.115 1.383-12.442 1.135-5.327 2.81-9.893t3.518-8.491 5.797-9.977 9.652-10.088 10.611-5.401q4.914-1.364 10.352-1.79t13.084.925 13.65 2.71q6.001 1.36 11.044 3.031 5.043 1.67 10.11 4.198 5.068 2.527 9.089 4.99 4.021 2.461 7.18 5.028 3.16 2.567 6.392 6.822t5.372 8.262 3.326 9.914 1.674 10.907-.115 9.978q-.601 4.978-2.468 10.335t-4.128 9.822q-2.26 4.465-6.153 8.752t-7.588 7.323-7.229 5.154q-3.534 2.118-8.623 3.235-5.089 1.118-9.392 1.017t-8.843-1.794-9.631-4.826-7.29-6.92-2.336-10.111 1.517-11.257 5.947-11.132 10.929-8.884 13.403-3.918 13.488-2.032 15.163-.274 14.709.764 11.569.75 12.184 1.881 11.484 1.895q4.603.52 9.895-.107 5.292-.625 9.622-4.95t6.947-10.131q2.618-5.805 4.134-12.832 1.515-7.028 1.355-14.57-.161-7.542-1.953-15.151-1.79-7.61-4.273-12.59-2.481-4.98-5.927-8.34-3.445-3.362-8.18-5.989-4.733-2.627-9.687-3.29t-9.08-.256q-4.127.407-12.218 4.421-8.09 4.015-12.435 7.724t-9.822 9.46q-5.478 5.75-9.873 12.444t-7.76 14.138-5.997 15.263-3.585 13.18-.822 9.671 1.512 9.42 5.721 7.328q4.344 2.22 13.48 2.526T294 487.13q4.813-.76 9.347-2.761t8.53-4.694q3.998-2.691 7.43-5.888 3.433-3.197 7.583-8.757t6.724-11.214 4.035-11.688 2.054-11.34.649-10.202-.716-10.132q-.77-5.234-1.54-9.21-.77-3.975-2.477-9.363-1.707-5.387-2.448-7.42t-.736-2.036l.009-.004q.005-.002 1.365 1.688t4.352 6.931 4.269 9.217 2.737 9.675 1.57 10.97-.456 10.932-1.838 12.466-3.83 13.215-6.594 13.68q-4.037 7.268-8.201 10.926t-8.97 6.726q-4.804 3.068-10.61 5.543t-11.062 3.177q-5.258.702-12.003 1.232-6.746.53-11.751-.748-5.006-1.277-8.963-3.697t-6.072-5.827-2.283-9.83.532-11.034 2.369-9.872 3.92-13.36q2.249-8.1 5.182-16.076 2.932-7.976 6.875-15.527t9.011-14.58q5.068-7.03 9.981-11.353t10.492-7.552q5.579-3.228 10.276-4.23t9.612-.84 10.867 1.52 11.321 4.78 8.848 7.813 5.62 9.873q2.14 5.483 4.747 13.418 2.606 7.936 3.72 16.23 1.112 8.293.44 16.49t-3.205 16.178q-2.531 7.982-6.238 11.84t-8.08 5.848-11.287 1.57-11.435-1.38q-4.522-.961-11.331-1.772-6.81-.81-11.687-1.557t-10.895-.862q-6.019-.116-13.52.862-7.503.977-13.67 2.547-6.165 1.57-11.573 3.31t-10.524 4.338q-5.116 2.597-7.548 6.989t-2.087 9.09 4.633 7.355 9.782 2.75 11.139-3.375 10.373-9.886 6.85-14.041 1.747-11.9-2.539-11.582-6.652-12.78-7.786-7.737-7.68-4.373-8.604-3.574-9.658-2.294-11.73-.743q-6.298.086-10.337.575-4.04.49-10.625 2.938-6.584 2.449-9.845 6.667-3.262 4.22-6.222 10.873-2.96 6.654-3.966 14.623-1.006 7.97 1.1 11.608t6.964 6.248 8.65 4.118 7.771 3.257 8.666 4.612 7.47 5.974q2.783 3.112 5.738 7.31 2.954 4.2 5.511 9.437 2.557 5.238 3.84 10.081 1.284 4.844 2.11 11.05.824 6.206-.135 10.8-.96 4.593-3.174 8.456t-5.995 6.648-9.118 3.323-12.22-1.092-11.196-7.33-3.228-11.141 4.64-10.823 5.878-9.103 5.325-8.586q3-4.866 6.42-11.366t6.579-12.143 6.994-12.086 8.01-9.455q4.176-3.011 8.366-3.039 4.19-.027 7.924 3.132t5.102 7.072 1.84 9.009.103 10.43-1.097 11.645-1.47 10.36q-.743 4.05-2.143 10.64-1.4 6.589-1.504 13.271t2.994 12.09 6.488 7.832q3.39 2.423 9.336 4.945t13.87 3.603q7.926 1.08 18.802.935 10.877-.146 20.438-2.303 9.562-2.157 16.543-4.877t3.128-4.483-9.19-1.979-9.799 2.545-7.258 7.246q-2.796 4.484 1.003 6.261 3.8 1.777 10.052 3.545 6.252 1.767 10.354 1.688 4.101-.08 10.552-2.293t2.502-6.475-9.295-6.654q-5.345-2.393-10.59-3.414-5.246-1.02-10.678.452-5.432 1.473-10.453 5.317-5.021 3.843-7.457 8.764t.496 7.88 6.89 4.79 9.805 3.597 15.889 3.806 20.069 3.191 21.382 1.607 25.015.674 26.389-.585 24.007-2.949 11.887-6.728 2.523-9.503 5.502-10.002 7.781-10.155 7.069-8.928 5.521-8.166 5.506-11.079 6.743-16.854 6.178-20.288 4.128-21.105 2.103-19.775-.373-17.324-2.026-14.721-4.174-12.293-6.28-3.085-6.766 6.417-7.775 8.14-7.537 8-6.987 8.45-8.196 11.72-9.753 15.016-13.552 19.564-12.464 16.179-10.663 12.56-13.802 14.95-7.566 7.401Z'
      />
      <path
         fill='hsl(0, 0%, 0%)'
         d='m331.97 381.325-5.387-3.305q-5.387-3.305-9.108-5.75-3.721-2.446-13.196-8.697t-17.232-11.289-17.278-10.31-17.608-8.712-17.009-6.346q-8.921-2.906-15.279-4.408-6.357-1.501-11.082-2.386t-9.3-1.922-11.448-3.252-11.801-7.034-5.67-10.831.884-12.045q1.63-6.032 6.043-12.875 4.414-6.844 8.41-12.037t7.923-9.27q3.926-4.075 9.105-7.997t9.99-6.673 11.63-4.606q6.819-1.854 13.269-3.14 6.45-1.285 13.221-1.786 6.772-.5 16.596.022 9.824.521 17.319 1.28t13.037 1.587 11.333 2.562 10.57 3.418q4.78 1.685 9.986 4.41t9.46 5.135 8.171 5.079q3.917 2.667 8.616 7.442 4.7 4.776 8.685 9.274 3.986 4.5 8.104 12.196t7.505 14.177q3.388 6.481 6.477 12.845t5.918 13.304 5.08 12.295 4.016 11.024 3.12 9.96q1.357 4.291 2.966 11.55t2.196 12.344q.587 5.085-.013 10.37-.6 5.286-.606 5.286h-.01q-.005 0-1.016-5.083-1.01-5.083-2.298-9.803-1.287-4.72-3.117-11.79t-3.035-11.383-2.877-9.818-3.615-10.883-5.099-12.028-6.365-12.821-6.869-12.33-8.343-12.65-8.448-10.746-8.223-8.412-7.836-6.95-7.206-5.456-8.573-5.39-9.113-4.805-9.742-4.002q-5.37-1.926-10.534-3.231-5.163-1.305-12.49-1.676-7.326-.371-16.82.085t-15.774 1.098q-6.28.642-12.388 2.044-6.109 1.402-11.99 3.278-5.88 1.877-10.21 4.016t-8.995 5.835q-4.665 3.696-8.345 7.175t-7.211 8.281q-3.53 4.804-6.458 11.113t-4.376 14.23q-1.447 7.92.765 11.466 2.211 3.545 7.944 6.766 5.732 3.222 10.034 4.93t8.797 3.395 10.758 3.641 15.37 4.591 17.514 5.753 18.257 8.09 17.852 9.78 17.467 11.353 12.711 9.581 7.777 7.444q4.53 4.407 4.523 4.415ZM350.18 607.435l-4.254 1.774q-4.255 1.773-10.623 2.53l-10.705 1.273q-4.337.514-11.45 1.93t-13.314 2.52-11.959 2.635-10.307 3.124-9.983 3.423-10.31 3.318-10.285 3.354-10.025 3.423-10.141 3.303-10.42 3.272-8.829 2.392q-3.934.87-8.884 1.32t-11.368.332-12.708-1.376q-6.29-1.258-10.18-2.612t-7.925-3.213-8.264-4.098-8.016-4.495q-3.79-2.256-6.677-5.789-2.888-3.533-4.077-7.957t3.55-10.38 9.198-7.573 9.433-.775 9.727 4 7.178 7.893 2.694 11.32-1.798 11.71-5.605 8.717-7.269 6.35-8.259 4.49-8.762 2.091-8.447-.346-8.094-3.064-7.557-6.99-5.131-8.853-1.928-8.46-2.17-9.783-5.822-5.136-7.715 2.823-4.79-1.92q-1.203-4.332-2.182-8.411-.98-4.08 1.989-8.019 2.968-3.94 7.488-8.532t10.093-9.06 12.92-8.553 11.96-5.65 9.303-2.792 9.286-2.087 14.269-2.205 15.463-1.891 13.126-.743 12.762-.92 10.648-1.254q5.226-.532 11.89-.773 6.665-.24 12.204-.75t11.827-1.073 11.49-1.335q5.2-.772 8.595-1.175 3.394-.403 3.395-.398l.002.01q.002.005-3.16 1.293t-8.2 3.2q-5.04 1.91-11.18 3.772t-11.695 3.17q-5.556 1.306-12.035 2.747t-11.44 2.273q-4.96.834-10.542 2.025-5.583 1.192-12.473 2.905-6.89 1.714-12.544 3.074-5.655 1.361-10.867 2.717-5.213 1.355-12.536 3.316t-11.376 3.61-10.143 5.018-10.203 6.838-7.807 7.419-6.199 7.26q-2.505 3.311-4.805 7.255t-4.705 7.356-7.051 7.383-11.416 4.142-10.952-2.578q-4.18-2.75-6.787-7.424-2.606-4.674-2.762-9.685t2.927-10.363 6.59-8.473 7.399-5.283 7.936-3.214 9.47-.967 10.742 1.017 9.877 3.917 7.454 6.574 4.796 8.51 2.88 9.057.383 8.843 3.885 3.386 8.881-3.847.294-1.942 1.12-4.73 8.861-3.12 7.53 4.293q3.898 2.1 9.31 4.263 5.41 2.162 10.617 2.67 5.206.506 10.08.516 4.875.01 10.387-.969 5.512-.98 10.637-2.36t10.525-3.116 10.603-3.125 10.84-3.094q5.635-1.706 9.957-2.664 4.321-.958 9.972-2.479 5.651-1.52 12.161-2.5 6.51-.981 13.083-1.264 6.572-.284 12.75-.228 6.176.056 10.366.102t8.496.36 10.499.605q6.192.29 10.752.961 4.56.672 4.56.682ZM374.138 391.848l9.105 5.572q9.105 5.573 15.759 10.469t17.964 14.578T433.8 436.89t10.57 9.624 8.26 8.37q3.214 3.488 5.266 6.196t2.049 2.71l-.008.007q-.003.003-2.404-2.364t-5.775-5.636-8.648-7.8-11.064-8.985q-5.791-4.45-17.22-13.805-11.428-9.354-18.092-14.25t-14.637-11.994-7.966-7.107ZM360.723 413.883l7.216 2.095q7.217 2.095 13.523 5.563 6.307 3.468 10.162 5.216 3.855 1.747 8.986 5.056 5.13 3.309 10.216 7.008t9.634 8.554q4.548 4.854 7.904 9.624t4.785 9.942q1.43 5.172 1.467 7.512t.033 2.342l-.01.002q-.005.001-1.056-1.993-1.052-1.995-3.943-6.013t-6.669-7.626-8.086-7.494-9.139-7.722q-4.831-3.833-9.457-7.255t-8.172-5.842q-3.546-2.422-9.47-6.17-5.922-3.75-11.928-8.265-6.005-4.516-6-4.525Z'
      />
      <path
         fill='hsl(0, 0%, 0%)'
         d='m400.955 379.392 3.834-2.22q3.834-2.22 7.976-3.747t8.335-2.957 9.09-3.25q4.898-1.819 9.247-3.335t8.194-3.073q3.844-1.557 10.973-4.743 7.13-3.185 13.826-6.615t12.46-7.146 11.027-7.218q5.264-3.501 9.563-6.255t8.137-5.404 9.013-6.785 9.347-6.995 7.852-5.47q3.68-2.609 7.538-7.01t8.521-9.294 10.259-10.563 10.632-11.035 9.422-9.887 8.406-8.442 8.92-7.96 10.035-7.202 10.12-4.481 4.986-1.315l.004.01q.002.004-2.337 1.916-2.339 1.913-5.055 5.195-2.717 3.283-6.036 8.069t-7.011 9.634-7.643 9.826-7.933 9.621-6.628 7.847-5.678 6.736-7.86 8.234-9.554 9.26-7.68 7.434-6.562 5.54q-3.608 2.662-7.512 5.726-3.905 3.064-9.45 7.006-5.547 3.942-9.291 6.715-3.744 2.774-8.213 6.3t-9.739 6.559-11.772 6.831q-6.501 3.798-14.258 7.196t-11.574 4.63-7.698 2.44q-3.88 1.207-8.168 2.32t-8.7 1.99q-4.413.878-9.764 2.099-5.351 1.22-9.715 1.758-4.364.539-8.692 1.05-4.329.512-8.758.495-4.43-.016-4.433-.026ZM505.384 543.225l5.363-4.043q5.363-4.044 10.711-7.371 5.35-3.327 10.275-6.517t9.98-6.53q5.054-3.342 16.381-8.759t20.416-9.302 22.482-7.655 13.396-3.765l.003.01q.002.005-12.828 4.913t-21.372 9.775l-19.258 10.97q-10.715 6.103-16.044 9.127t-10.578 5.74-10.877 5.502-11.834 5.355-6.21 2.559Z'
      />
   </svg>
)
export default SvgPerroDuerme
