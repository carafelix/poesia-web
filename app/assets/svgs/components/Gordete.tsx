import * as React from 'react'
import type { SVGProps } from 'react'
const SvgGordete = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={800}
        height={800}
        style={{
            overflow: 'hidden',
            display: 'block',
        }}
        viewBox='0 0 800 800'
        {...props}
    >
        <path
            fill='hsl(0, 0%, 0%)'
            d='m352.348 229.325-4.435-6.176q-4.434-6.175-14.489-18.97Q323.369 191.381 318 184.66q-5.369-6.722-13.304-14.094t-12.813-11.42-12.61-8.507-12.909-6.798-15.982-4.662-16.362-3.131-11.758-.955-10.013.478-8.59 2.048-8.92 2.805-8.447 3.413-7.548 3.96q-3.243 1.929-7.008 6.444t-5.641 10.504-1.549 9.271q.328 3.282 1.275 6.917t2.72 8.768 4.517 8.864 7.65 8.233 11.372 8.055 14.522 5.467 18.377 1.92 18.038-.83 13.68-2.425 11.8-4.016 10.986-4.809 11.326-4.749 11.474-4.158q5.297-1.791 9.957-3.022t9.42-1.816q4.76-.584 10.993-.9 6.231-.315 10.412.438 4.181.754 7.836 3.275t6.175 5.639 4.046 6.044 3.416 6.839 1.887 3.918l-.005.01q-.002.004-3.106-3.11-3.104-3.115-6.287-6.792-3.184-3.677-7.181-6.775t-7.667-4.076-9.563-1.379-10.519-.134q-4.624.268-9.297 1.042-4.672.774-10 2.284t-11.4 4.078q-6.07 2.569-11.326 4.714t-11.147 4.707q-5.89 2.56-11.944 4.207t-13.853 2.754-18.413 1.439-19.222-1.241-15.862-4.804-13.37-7.61-9.48-8.794q-3.363-4.416-6.04-9.95-2.679-5.533-3.705-9.997t-1.09-8.904 1.146-9.145q1.211-4.706 3.113-7.513t4.479-5.535 5.357-4.652 6.373-3.501 8.288-3.54 8.98-2.904q4.286-.94 9.417-2.14 5.13-1.201 9.057-1.09 3.926.111 10.26.181 6.332.07 11.856 1.18 5.523 1.109 16.532 3.306t16.086 4.82 12.959 7.011 12.837 8.404 13.065 11.366 13.582 14.022q5.472 6.67 15.255 19.72t13.78 19.517q3.994 6.469 3.986 6.474Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m367.006 221.988 2.307-21.474q2.308-21.473 5.762-35.43t6.559-22.879q3.104-8.92 6.604-16.024t6.393-12.287q2.894-5.183 6.148-9.358t9.099-8.245 10.973-7.08 10.35-5.015q5.221-2.005 10.454-3.521t9.295-2.414 8.26-1.393q4.197-.495 7.499-.257t6.616 1.589q3.315 1.35 6.76 4.247 3.446 2.896 5.785 6.184t3.574 8.893-1.531 15.28-4.68 14.58-6.766 11.772-7.9 10.595-6.421 7.845-4.264 5.188-1.287 1.341-.846.434q-.45.166-.926.219-.475.053-.95-.009t-.921-.236q-.447-.174-.838-.45-.392-.275-.706-.637-.314-.361-.533-.787-.218-.426-.329-.892-.11-.467-.105-.945.004-.48.123-.943.12-.464.346-.886t.547-.777 3.773-3.14 7.638-4.966q4.185-2.181 10.158-3.994t9.58-3.172 11.639-1.438q8.033-.079 13.165-.019t9.022.505 9.801 2.602 11.568 6.41 10.485 8.428 7.744 6.085 8.833 3.059 9.195.126 6.419-3.402q3.141-2.382 7.236-6.999t6.385-9.266 3.29-9.708q.997-5.059.668-9.164t-4.18-9.914q-3.85-5.81-7.648-7.536-3.798-1.727-12.292-3.24-8.493-1.511-22.943-.548t-25.486 2.466q-11.035 1.503-18.138 2.968-7.102 1.466-12.18 2.923t-10.163 3.55q-5.084 2.091-8.574 4.368t-8.015 5.241q-4.525 2.964-8.495 5.828t-7.347 5.657-8.318 6.43-9.431 7.298-10.132 8.636-10.518 9.45-8.974 8.567-8.673 8.7-8.204 8.507q-3.63 3.899-6.954 7.66-3.323 3.76-5.901 6.883-2.58 3.123-4.918 5.918t-4.64 5.677q-2.3 2.882-6.167 6.337t-3.87 3.451l-.007-.007q-.004-.004 3.166-3.966t5.254-7.089q2.085-3.126 4.4-5.969 2.314-2.842 5.017-5.902 2.702-3.06 6.14-6.761t7.211-7.445 8.128-8.617 8.503-8.922q4.152-4.05 8.772-8.815 4.621-4.766 9.99-10.197t9.785-9.259q4.417-3.827 9.1-7.89 4.683-4.064 8.367-6.642 3.683-2.579 7.828-5.267l8.795-5.707q4.65-3.018 8.583-4.9 3.932-1.881 9.228-3.907t10.475-3.175 12.296-2.982 18.202-3.841 26.02-3.64 24.58-.749 14.525 3.374q4.88 2.492 8.378 6.681 3.497 4.19 4.365 8.053.868 3.862.906 8.602t-.931 10.578-3.31 11.242-6.31 11.693-8.468 9.734q-4.498 3.444-9.279 4.8t-10.43 1.18-8.824-1.94q-3.177-1.764-6.583-4.104t-8.125-7.042q-4.718-4.702-9.161-8.753-4.442-4.05-8.866-6.536t-7.804-3.319-8.271-.947q-4.893-.114-11.944.814t-10.606 1.939-8.763 3.357-8.914 4.285-7.014 4.157-3.704 2.486-.846.434q-.45.166-.925.219t-.951-.009-.921-.236-.838-.45q-.391-.275-.706-.637-.314-.36-.533-.787-.218-.426-.328-.892t-.106-.945q.004-.479.123-.943t.345-.886.548-.777q.32-.356 1.507-1.088t5.059-3.78 6.976-6.324q3.102-3.276 7.053-10.061t5.752-11.33 3.521-12.857-.632-15.073-4.866-9.282-7.327-4.752-8.851-2.224-8.019.291q-3.98.284-9.172 1.549t-10.332 2.969q-5.14 1.705-10.224 4.59t-10.52 7.018-8.888 7.928-6.426 8.862q-2.971 5.069-6.19 12.169-3.217 7.1-6.002 16.015t-6.104 22.76q-3.32 13.845-7.033 35.12t-3.723 21.274Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m352.35 219.887 3.833-3.305q3.832-3.304 6.7-5.334t13.164-6.967 15.6-7.222q5.303-2.285 8.977-4.078 3.674-1.792 7.173-3.06t6.806-2.236 7.031-1.493 7.42-.8 8.435.03 8.606.642 8.715 1.562q4.85 1.227 8.971 2.284t7.916 2.413q3.794 1.355 8.05 3.23t7.942 3.519 7.846 4.378 7.76 5.395 6.673 4.917 6.792 5.89 6.638 6.644q2.919 3.011 5.684 6.096t5.715 7.327q2.95 4.244 5.455 7.778t5.254 7.841 5.202 7.883q2.453 3.577 4.755 6.867t4.964 7.477q2.66 4.188 5.228 6.858t5.733 6.016q3.166 3.347 5.943 5.418 2.778 2.071 5.738 4.1 2.96 2.027 7.445 3.499t9.464 2.545q4.978 1.074 11.658 1.337 6.68.264 13.136-.653 6.457-.917 12.846-2.697 6.388-1.78 13.343-4.559t12.632-5.456 10.424-5.955 10.483-7.537 9.592-7.959 7.323-7.342 5.543-6.365 4.718-6.842 2.649-4.12l.009.005q.004.002-2.184 4.468-2.19 4.465-4.267 7.273t-5.545 6.506q-3.468 3.698-7.434 7.357-3.965 3.659-9.545 8.213t-10.461 7.847-10.525 6.158-12.573 6.047-13.379 5.505-13.198 3.985-14.14 2.316-12.857-.177-11.383-2.432-9.024-3.962-6.095-4.958q-2.99-2.595-6.314-5.977t-6.108-6.628-5.632-7.31-5.007-7.44q-2.159-3.375-4.537-6.982t-5.33-7.703-5.358-7.581-5.349-7.26-5.539-6.805q-2.596-3.03-5.211-5.907-2.616-2.876-6.248-6.012-3.633-3.137-6.53-5.476t-6.254-4.823-7.07-4.773q-3.715-2.289-7.22-3.964t-7.67-3.359-7.437-3.034-7.271-2.413q-4.001-1.06-8.347-1.986-4.345-.924-7.948-1.4t-7.935-.663-7.818-.204-9.934.522q-6.45.538-9.752 1.208-3.301.67-7.128 2.02t-9.088 3.628-15.575 6.658q-10.313 4.381-13.436 5.858t-7.72 3.591q-4.597 2.115-4.602 2.106Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m281.15 297.373 4.61-2.03q4.61-2.028 8.349-3.427t9.524-3.414q5.786-2.014 10.562-4.127t8.537-4.058 6.728-3.781 7.077-5.676 6.597-8.19 1.684-9.467-3.51-8.874-6.058-5.664-7.684-1.935q-4.331-.025-10.686 2.657t-9.23 4.738q-2.878 2.056-5.043 5.031t-2.311 6.883 1.967 6.859q2.113 2.95 5.01 6.099 2.898 3.149 6.35 5.735 3.451 2.585 7.04 4.196t8.722 3.274 9.404 2.229q4.271.565 8.48.244 4.208-.321 7.542-.897t8.775-3.525 10.452-7.631 7.332-7.39q2.32-2.708 6.375-8.114t8.665-11.06 7.042-8.023 8.24-5.985q5.81-3.618 9.597-4.573 3.788-.954 7.59-1.298 3.8-.344 7.203-.229t10.135 2.105q6.733 1.99 10.037 3.521 3.303 1.532 7.067 4.322 3.763 2.79 6.598 5.16t7.314 6.711 7.61 8.592 5.918 8.387q2.79 4.137 5.097 8.836t2.85 10.523-.683 11.108q-1.227 5.285-4.925 10.549t-7.92 7.71-8.299 3.495-8.689 1.25q-4.614.2-8.855-.082-4.24-.282-8.167-1.062t-8.643-2.998q-4.717-2.218-8.345-3.989-3.627-1.77-7.673-4.244t-7.228-4.79q-3.182-2.318-5.975-4.435-2.792-2.118-5.891-5.01-3.1-2.89-5.646-5.259-2.548-2.368-6.273-6.931t-6.493-7.739q-2.767-3.174-6.256-6.368t-6.88-4.098q-3.392-.905-6.672-.42t-6.057 4.13-3.39 9.454-1.073 11.773-1.38 10.928-2.373 9.505q-1.453 4.538-3.88 7.761t-5.153 5.783-6.312 4.61-8.403 3.539q-4.817 1.49-9.339 2.173-4.521.684-10.189.555-5.668-.13-10.457-.751-4.788-.622-8.735-1.468t-8.63-3.004-8.327-4.306q-3.645-2.15-7.068-5.922-3.423-3.773-5.815-7.25-2.391-3.475-3.71-7.29t-1.708-8.67q-.39-4.855.014-9.05t2.38-9.055 4.858-8.749 6.257-6.478 7.664-4.097 7.933-1.925 7.882.108q4.237.525 8.321 1.742 4.085 1.217 7.914 2.667t8.563 4.226 8.572 5.093 7.61 4.868q3.771 2.552 7.948 5.566t8.023 5.419q3.846 2.404 8.393 5.429 4.547 3.024 8.308 5.05t7.065 3.34 6.84 2.104q3.539.792 10.153-.18t10.15-2.89q3.535-1.918 6.945-4.363t7.94-6.594 8.474-8.558 6.281-7.167 2.344-2.755l.008.006q.004.003-1.904 3.087-1.91 3.083-5.132 8.17-3.223 5.086-7.047 10.528-3.825 5.443-7.328 8.565-3.502 3.123-7.73 5.806-4.227 2.683-8.973 4.055t-8.63 1.16-8.069-1.297q-4.185-1.083-7.72-2.765t-7.364-3.87-8.641-4.828-8.821-5.064-8.396-5.104-8.017-5.027q-3.63-2.348-7.29-4.473t-8.068-4.137q-4.408-2.01-7.923-3.322t-6.794-2.345q-3.278-1.033-8.902-1.587-5.624-.553-10.983 1.686t-7.529 4.984-4.047 9.532-.99 13.148 2.777 9.264q1.892 2.903 4.299 5.638t5.395 4.565q2.988 1.83 6.83 3.37 3.84 1.539 7.2 2.307 3.359.768 7.26 1.111 3.902.344 8.765-.348 4.863-.691 8.12-1.33t8.8-3.292 8.68-5.975q3.14-3.323 4.34-6.449t2.142-7.336q.94-4.212 1.285-9.648.344-5.436.414-9.042t.502-8.37 1.846-8.066 3.488-5.99q2.075-2.69 6.518-5.112 4.444-2.422 9.032-3.066t8.805-.112 8.223 2.54 6.5 4.423 4.796 5.167 5.001 6.55 5.48 7.927 5.163 6.468 5.213 4.86 8.058 6.604q5.226 4.086 9.038 6.037 3.813 1.952 7.34 3.51 3.528 1.559 10.087 3.488t9.97 1.98q3.41.05 6.886-.384 3.475-.435 7.743-1.95 4.268-1.516 6.472-4.076 2.203-2.56 3.234-5.925 1.03-3.364.627-7.71-.403-4.347-2.43-8.265-2.026-3.918-4.484-8.008-2.458-4.091-5.43-8.086-2.97-3.995-7.286-7.913t-9.938-7.227-10.723-5.061-10.665-1.79q-5.564-.038-10.665 1.635t-9.242 4.727q-4.142 3.054-8.543 8.223-4.401 5.168-8.896 10.764-4.494 5.595-7.072 8.427-2.577 2.832-5.733 6.051t-6.12 5.35-6.728 4.246-7.27 3.186-7.111 1.405-8.654.732-9.796-.174q-4.75-.573-10.93-1.589-6.18-1.015-10.79-2.874-4.611-1.859-9.12-4.603-4.507-2.745-9.005-6.47-4.499-3.726-6.386-6.663t-3.1-9.338.581-11.122 5.767-8.875 7.405-6.632 8.398-5.608q4.967-3.128 8.835-4.185 3.868-1.058 7.343-1.02 3.475.04 7.506.957 4.031.918 6.852 2.657 2.82 1.74 5.184 4.025 2.364 2.287 4.218 5.122t3.219 5.85 2.149 7.16q.784 4.146.166 8.645-.62 4.5-4.678 9.845-4.06 5.347-9.615 9.097t-8.902 5.227q-3.347 1.477-7.36 3.076-4.012 1.6-9.028 3.577-5.015 1.977-10.934 3.92-5.92 1.944-9.888 2.772-3.968.829-8.99 1.208-5.024.38-5.026.37Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m364.93 339.27-1.1 4.799q-1.101 4.797-2.194 8.068-1.094 3.271-3.038 10.221t-2.584 11.106q-.639 4.156-.339 9.16t3.507 7.233 6.473 2.983 7.039 1.773q3.774 1.017 7.303 1.671t7.435 1.208q3.905.553 7.492 1.99 3.586 1.437 5.343 6.49t.624 8.311-3.106 6.062-4.701 5.185-6.758 4.36q-4.03 1.977-9.847 3.82-5.817 1.84-10.02 2.315t-8.288-.569q-4.085-1.044-6.939-6.184t-1.705-8.559 5.16-7.212q4.01-3.794 7.15-5.547 3.14-1.754 9.53-4.934l11.261-5.603q4.873-2.423 8.52-4.358 3.65-1.935 6.542-4.374 2.893-2.44 5.074-5.896t6.265-6.749 9.947-2.49 8.682 3.445 5.812 6.976q2.992 4.334 5.041 7.476t5.19 6.707 2.635-.082.42-6.815.453-7.241-3.842-6.979-6.514-4.665-7.824-3.903-8.524-3.262-7.251-1.879-7.16-1.493-9.435-1.903-10.01-2.356-7.685-3.846-5.538-5.558-3.524-6.985-1.671-7.399.608-9.936.94-6.622l.009.002q.005 0 1.191 6.172t3.71 11.514q2.523 5.344 6.459 8.581 3.935 3.238 7.89 4.166t9.448 1.96 9.562 1.527 7.725 1.203 7.936 1.63 10.21 2.16 10.757 3.191 8.636 4.626 6.829 6.446q3.017 3.77 3.978 6.988t.89 8.798q-.07 5.58-.8 8.8t-4.348 9.365-6.31 8.555-5.947 3.471q-3.254 1.06-7.623.129-4.37-.931-6.863-3.467-2.492-2.537-5.796-7.068t-5.549-7.876-2.296-6.629-2.844.316-5.597 6.173-6.058 4.732-7.032 3.929q-3.78 1.771-8.698 4.204t-7.816 4.01q-2.898 1.579-8.112 4.968-5.214 3.388-8.735 2.48-3.52-.91.012-.687 3.534.222 7.599-.811t8.352-3.588 6.69-5.105q2.405-2.551-1.704-3.785-4.108-1.235-7.996-2.116t-7.65-2.058-8.31-2.755-8.903-7.328q-4.354-5.75-3.582-11.673T351 372.214t3.366-11.387 3.877-10.12q1.646-2.977 4.158-7.21 2.511-4.234 2.52-4.23Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m452.88 343.446 5.16-.411q5.16-.41 8.916-.28t7.769.33 9.655.928 9.715 1.472 11.01 3.082q6.94 2.337 10.536 4.184t7.913 5.343q4.318 3.495 7.762 6.814t6.042 6.687q2.596 3.368 5.097 7.607 2.502 4.238 4.343 7.937 1.841 3.7 3.264 9.509t2.008 11.437q.585 5.627.178 11.206t-2.135 11.897q-1.728 6.319-3.212 11.431-1.485 5.113-4.133 10.646-2.649 5.532-4.819 10.047t-4.194 8.361q-2.024 3.846-4.74 7.709-2.715 3.862-5.3 7.35t-6.26 7.595-7.372 7.983-7.758 7.629q-4.06 3.753-10.888 8.468-6.828 4.716-14.647 8.753-7.82 4.038-15.066 7.47t-18.835 6.665-21.327 5.161-17.193 3.017q-7.454 1.09-13.636 1.614-6.182.526-13.041.374t-12.197-.268-10.978-1.066q-5.64-.95-10.2-1.74-4.56-.788-8.787-2.243-4.226-1.454-9.076-4.333-4.849-2.88-9.09-5.867-4.242-2.987-8.221-6.757t-8.205-9.871-7.442-12.063q-3.217-5.961-6.626-13.34t-6.018-13.846q-2.608-6.467-4.962-12.201t-4.486-12.13-4.035-12.088-3.507-12.073-3.098-11.438-2.5-9.944-1.93-10.276q-.923-5.39-1.668-9.483-.744-4.092-1.27-7.96-.527-3.87-.957-8.416t-.469-6.65q-.038-2.101-.033-2.102l.01-.001q.005 0 .464 2.014.458 2.014 1.361 6.508t1.585 8.32q.681 3.827 1.362 7.924.68 4.098 1.692 9.476t1.73 10.25 1.86 10.018 2.909 11.447 3.543 12.025q1.776 5.723 4.054 12.027t4.632 12.031 5.157 12.06q2.802 6.334 6.457 13.492 3.656 7.158 7.145 12.733 3.49 5.575 7.96 11.033 4.468 5.46 8.198 9.056t7.71 6.609q3.98 3.012 8.56 5.75 4.58 2.736 8.37 4.58 3.792 1.845 8.18 3.151 4.39 1.306 9.89 2.45t10.788 1.71 12.103.596q6.813.031 12.966-.428 6.154-.46 13.556-1.688 7.403-1.227 17.04-3.336t20.971-5.537q11.333-3.429 18.354-7.173t14.354-8.09 13.49-9.443 9.984-8.845 7.352-7.607 6.931-8.032 6.145-7.422 5.468-6.733q2.73-3.484 5.015-7.01 2.286-3.525 4.591-7.854t4.52-9.69 3.673-10.293 2.403-10.92 1.163-10.943-.564-9.95-2.57-10.01-3.26-8.373q-1.47-3.357-3.925-7.218-2.454-3.862-4.436-6.803t-5.06-5.967-7.022-5.96-7.04-4.882-9.112-4.88-9.717-4.078q-3.701-1.145-9.262-2.033-5.56-.889-9.493-1.654-3.933-.766-7.537-1.494t-8.68-1.74-5.075-1.023Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m354.455 476.431 3.33 1.276q3.328 1.275 9.326 3.442 5.998 2.166 9.648 3.165 3.65.998 9.145 1.751 5.494.754 10.834 1.082t9.915.061 9.426-.941 8.616-1.646 7.002-2.233q3.236-1.263 6.409-2.672t8.768-5.562 9.345-8.593 4.99-8.784 1.291-9.113.055-4.77l.01-.002q.005-.001.881 1.523t1.478 4.956-.017 8.86-2.158 8.296-3.71 5.49q-2.17 2.624-5.332 5.89-3.161 3.267-6.286 5.247t-6.524 3.463-7.124 2.78q-3.724 1.295-7.84 2.093t-9.305 1.452-10.074.68-10.467-.374-11.623-1.36-9.696-2.575-9.297-4.903-8.334-5.625-2.687-2.345ZM449.748 274.347l.783 2.754q.784 2.753 4.733 3.37 3.95.617 6.689-1.994 2.74-2.61-.185-5.95-2.924-3.34-6.118-4.93t-6.564-2.206-3.371-.621l-.002-.01q0-.005 2.078-.879t5.932-1.164 8.182.95 8.077 4.579 3.926 7.556-2.306 6.859-7.022 4.508-8.769 1.08-6.541-4.681-.927-6.559 1.395-2.663ZM282.208 289l2.27 2.284q2.271 2.284 5.922 6.146t7.148 4.809q3.497.945 6.419-1.579t3.611-6.114-.744-7.522-1.429-3.934l.01-.005q.004-.002 3.382 3.266t4.398 7.11-.31 8.34-4.922 7.274q-3.59 2.779-7.645 2.492t-6.755-2.169q-2.702-1.881-4.712-5.057t-3.596-6.118-2.325-6.078q-.74-3.135-.731-3.14Z'
        />
    </svg>
)
export default SvgGordete