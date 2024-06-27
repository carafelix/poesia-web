import * as React from 'react'
import type { SVGProps } from 'react'
const SvgTetera = (props: SVGProps<SVGSVGElement>) => (
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
            d='m241.907 351.621-4.413-6.453q-4.413-6.454-8.325-13.997t-6.361-11.401-5.26-8.134-7.062-10.46-8.526-12.528-7.315-10.638q-3.041-4.292-6.648-8.237-3.606-3.944-7.423-7.284t-7.405-5.816-9.234-3.138-9.819.985-7.24 4.71-6.324 7.887-6.037 11.466-3.905 11.665-1.613 9.682-.726 10.278-.059 10.77q.18 5.152.855 10.682.676 5.53 1.827 10.251t2.493 9.174 3.1 9.548 3.854 8.877 6.861 11.1 7.51 10.841 6.935 8.073q4.192 4.55 8.317 8.461t8.041 7.101q3.916 3.189 8.56 6.12 4.646 2.93 8.612 4.851 3.966 1.922 8.056 3.11 4.09 1.19 9.304 1.528 5.215.34 8.09-2.562 2.874-2.9 3.592-8.118.717-5.218.598-10.742-.12-5.524-.518-11.44t-1.31-11.878q-.91-5.962-1.761-12.585-.85-6.622-1.645-11.93t-1.659-11.83q-.864-6.524-.69-10.537.173-4.014.48-5.874.308-1.86.313-1.86h.01q.005 0 1.31 5.52 1.303 5.522 3.186 11.771 1.882 6.25 3.416 11.39t3.57 11.432 4.03 12.573q1.993 6.281 3.244 12.32 1.25 6.038 2.418 13.087 1.167 7.05.534 11.6-.634 4.551-2.17 8.426-1.535 3.876-4.65 7.555-3.113 3.679-9.747 5.272-6.633 1.593-12.972.17-6.338-1.422-11.205-3.142t-9.013-4.05-9.517-5.514-9.465-6.605-8.445-7.283-9.737-8.532-8.322-8.58-5.844-8.229-4.903-7.942q-1.996-3.622-4.315-8.162t-4.464-9.954-3.508-10.13q-1.362-4.719-2.686-9.91t-2.581-11.317-1.74-11.55q-.482-5.424-.979-11.729-.496-6.305-.298-11.548.2-5.244.691-11.864.492-6.62 1.86-11.217 1.368-4.596 3.032-8.325 1.665-3.73 4.09-8.452t7.15-9.808q4.724-5.086 11.029-8.878t12.281-4.673q5.978-.882 11.803.002 5.824.883 10.31 3.213t8.29 5.631q3.805 3.301 7.9 7.632t7.77 9.376q3.673 5.045 6.168 10.108l5.842 11.86q3.348 6.798 6.52 13.822 3.173 7.025 5.483 11.709t4.128 8.947 5.358 11.938 6.287 14.994 2.74 7.324ZM248.615 313.3l-3.944-2.666q-3.944-2.666-8.664-8.1t-8.038-9.33q-3.32-3.895-8.132-10.418-4.813-6.523-8.092-13.155-3.278-6.632-4.568-13.127t-.93-10.701q.36-4.206 3.048-12.23 2.686-8.025 5.475-11.997t6.358-7.79 9.562-8.213 12.678-8.612q6.685-4.219 14.513-8.273 7.829-4.055 17.953-7.839 10.125-3.783 18.861-6.334t18.859-4.369 18.297-2.51 14.937-1.237 14.38-.092q7.62.453 13.35.57t11.331.864q5.601.746 10.315 1.708t8.899 1.737 9.003 2.5 8.695 3.468 7.603 3.834 7.588 5.425 6.924 7.928 4.827 8.696 2.88 8.214 1.356 9.083-.176 9.264-1.832 9.172-3.515 9.418-4.769 8.812-6.952 8.938-8.012 8.363-9.046 7.285-9.642 6.477-8.952 5.178-10.906 4.36q-6.28 2.07-11.906 3.384-5.625 1.312-13.19 1.694t-13.878.38-11.994-.796q-5.68-.795-12-2.806t-10.954-3.606-9.609-3.884q-4.974-2.29-8.865-3.852-3.891-1.563-10.386-4.322t-11.338-5.27-4.843-2.517l.003-.01q.001-.004 5.355.866 5.353.87 12.312 2.5t11.137 2.901 9.115 3.06 9.369 3.306 10.365 2.94 10.941 2.227 10.876.675 12.713-1.341 11.787-2.355 10.568-3.553 9.57-4.183 8.115-4.554 8.48-6.052 7.672-6.64 6.694-7.55 7.393-11.34 5.286-10.997q1.224-3.84 1.903-10.837.679-6.999-.858-13.634t-3.56-10.212q-2.024-3.576-4.947-6.499t-9.347-7.21-10.618-6.241-8.26-3.348q-4.062-1.395-8.386-2.948-4.323-1.554-9.615-2.837-5.293-1.283-10.938-2.052-5.644-.769-13.122-1.106t-14.203-.145-14.728 1.23-17.802 3.291-18.12 5.396-17.593 7.567q-9.272 4.426-15.973 9.316-6.7 4.891-12.167 10.054t-9.916 9.884q-4.45 4.72-7.305 8.085t-6.238 9.033-4.722 10.976-1.24 10.19 1.908 10.85 5.194 12.688 6.074 10.937 6.922 10.088 5.798 10.37q1.565 4.495 1.557 4.501Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m314.724 214.603 2.752-4.769q2.753-4.77 5.43-7.98 2.679-3.21 7.239-9.17t6.898-9.292 5.863-8.987q3.526-5.656 6.052-10.89 2.526-5.233 3.85-10.275t1.463-9.454-.892-8.312T349 126.59t-6.975-7.846-8.473-4.72q-4.845-1.86-9.89-1.96-5.044-.099-10.79 2.516t-9.865 5.99-8.265 8.673-6.4 10.558q-2.256 5.261-3.333 12.227t-1.11 11.093 1.41 10.111q1.442 5.984 5.39 11.596 3.946 5.613 7.543 8.267t7.216 4.496 7.464 3.4q3.846 1.558 8.838 3.305t8.814 2.964 9.625 3.295 8.435 3.267 2.63 1.194l-.003.01q-.001.004-2.898.003-2.896 0-9.02-.163-6.125-.163-10.193-.44-4.067-.278-9.865-.752-5.797-.473-10.485-1.548-4.688-1.074-9.485-2.832-4.796-1.759-10.629-4.985t-9.035-6.762q-3.204-3.537-6.168-8.218-2.964-4.682-4.207-8.685-1.244-4.004-1.941-8.444t-.996-9.605q-.3-5.164.043-9.371t2.557-13.178q2.215-8.97 4.074-12.65t4.308-7.457 5.04-7.027 5.923-6.547 9.284-6.86 9.947-5.262 10.648-2.261 11.336.143 10.15 2.854 10.802 5.98 9.928 8.983 7.052 10.52 3.7 12.518.47 13.523-3.194 12.766-6.3 12.32q-3.88 5.925-8.439 11.193t-10.388 10.87q-5.828 5.603-8.871 8.304t-6.398 5.29-8.315 4.98-4.966 2.385ZM414.381 281.674l2.523 4.643q2.524 4.642 4.5 10.14 1.977 5.5 5.647 12.701t8.956 12.09q5.285 4.888 11.112 7.145t12.25 2.924 12.513-.153q6.091-.82 12.564-3.957 6.474-3.137 9.588-5.742t6.658-6.35 6.4-7.527 5.018-7.8 4.54-9.916 3.557-11.162q1.18-5.262 2.183-11.485t.932-10.926q-.071-4.705-.491-8.832t-1.162-8.475-2.186-11.025-3.272-12.234-3.393-9.243-2.377-8.33 2.047-9.098 8.964-5.9 12.246-.521 11.594 2.524 3.43 5.5q-2.023 3.906-1.192-.215.83-4.122.082-9.122t-1.617-9.754q-.87-4.753-1.695-9.643t-3.795-7.713q-2.97-2.823-2.97-2.828v-.01q0-.005 2.903-.21 2.904-.204 6.43 1.916t5.976 5.666 4.953 7.778 4.882 9.138 3.137 10.35-.952 10.364-6.893 7.718-9.481 1.648-8.947-2.652-9.297-4.108-3.582 2.05 2.531 11.44 2.153 13.677q.69 6.895 1.264 11.722t.66 9.325-.09 9.719-.72 11.981-1.703 12.604-2.995 13.111-4.397 12.198q-2.561 4.928-5.637 9.235t-7.008 9.223-8.037 8.432-9.257 6.71-12.74 4.948-15.649 1.325-12.425-1.452-8.326-2.702q-3.962-1.68-7.651-4.289-3.69-2.608-7.418-6.312t-5.893-7.49q-2.164-3.787-4.72-12.125-2.557-8.337-3.72-14.214t-.844-11.151q.32-5.274.33-5.276Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m576.294 211.744-3.948 5.155q-3.948 5.156-7.928 9.808t-4.092 10.788q-.113 6.135.954 10.55 1.067 4.413 3.534 11.584t4.819 13.774q2.352 6.604 4.255 11.649 1.902 5.044 3.326 12.062 1.423 7.017 1.774 13.716.35 6.7-.568 13.929-.919 7.23-2.174 11.155-1.256 3.925-2.642 7.828t-2.865 7.677-5.144 11.184-7.255 13.663-6.221 9.868-8.404 10.362-11.596 12.126-9.975 8.108-8.14 4.728-8.687 3.632-11.267 3.883-13.251 2.87-11.216.294-4.531-.332l-.001-.01q0-.005 4.173-1.675t9.61-4.138q5.435-2.468 11.232-6.034 5.796-3.567 12.557-7.808t12.505-9.45 10.924-10.816q5.18-5.607 9.536-12.056t7.719-12.065 5.136-9.263 4.388-10.021 4.776-13.14 3.05-12.084.806-11.143-1.069-11.63q-.985-5.806-2.426-10.912t-3.27-11.7q-1.828-6.594-2.988-10.769t-1.993-8.097-1.287-13.07 2.248-15.088q2.7-5.94 8.184-9.966t11.451-6.584 5.974-2.55ZM468.034 434.012l1.543 2.479q1.544 2.48 3.836 7.12t5.426 8.962 7.413 5.792q4.278 1.47 12.401 5.239t9.591 8.402.05 10.882-6.578 13.41q-5.16 7.16-8.879 10.084-3.72 2.924-9.51 5.637-5.792 2.713-16.1 4.003t-22.695 1.326-22.19-.275-20.304-.656-19.055-.372-16.554.67q-8.001.698-19.129 2.543-11.127 1.844-20.299 3.37-9.172 1.525-18.598 2.92t-15.628 2.101-10.5.931-7.234.171-2.935-.06v-.01q0-.005 2.911-.298 2.912-.292 7.185-.627t10.462-.947q6.19-.613 15.55-2.32 9.36-1.705 18.466-3.589t20.247-4.172q11.14-2.289 19.24-3.538 8.098-1.249 16.69-1.967 8.59-.718 18.983-1.396t19.942-1.768q9.549-1.09 20.656-2.89 11.108-1.801 18.492-4.83t13.244-7.604q5.86-4.574 8.402-7.89 2.542-3.317 4.22-8.307 1.676-4.99 3.842-1.209t-2.953 1.999q-5.118-1.783-8.74-4.689-3.62-2.905-6.744-7.57-3.123-4.664-4.862-9.809t-2.075-10.717 1.207-8.052 1.553-2.479Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m195.923 227.075-4.131-.906q-4.132-.905-10.548-2.924t-12.723-2.968q-6.307-.95-13.984-.084t-16.055 3.898q-8.378 3.032-12.114 4.893t-7.422 4.45-8.964 8.34-7.847 9.72-4.436 8.014-3.154 8.253-2.986 10.024-2.616 10.955-1.99 11.851-1.607 14.12-.506 15.52q.03 8.11 1.256 18.978 1.228 10.868 2.737 19.641 1.51 8.774 4.265 18.272 2.755 9.499 5.8 18.248 3.043 8.75 6.497 16.882 3.453 8.134 7.649 17.393t7.475 15.892 6.22 12.695q2.941 6.062 4.83 9.63 1.89 3.567 4.096 7.62 2.206 4.051 2.027 9.56-.179 5.508-8.234 8.807t-13.089 3.762-9.455-.08-8.724-2.324-9.285-7.347-5.669-11.977 1.33-10.144 5.113-6.484q3.097-2.75 8.464-4.81t10.426-2.877q5.059-.817 9.43-1.142 4.373-.325 11.163.834 6.791 1.16 13.828 3.475t19.825 7.716 28.744 11.458 30.053 10.152 25.568 6.787q11.473 2.693 25.913 3.932t26.663 1.882 22.089.454 18.745-1.851q8.88-1.662 14.047-3.188 5.167-1.525 5.168-1.52l.003.009q.002.005-5.138 1.669t-14.032 3.618-18.804 2.498-22.191.315q-12.28-.227-26.973-1.036-14.694-.808-26.403-2.934t-26.235-5.48-30.915-8.342-29.156-8.726-19.197-4.776-11.878-1.289-12.68.522q-7.23.773-13.444 3.91-6.215 3.135-4.778 7.39 1.437 4.254 7.034 6.622 5.598 2.367 13.898 1.77 8.3-.596 10.009-4.463t.206-10.247-4.029-12.607-5.627-12.95q-3.102-6.725-7.44-15.933-4.337-9.207-8-17.306t-6.994-16.8q-3.33-8.703-6.501-18.232t-5.234-18.304q-2.064-8.775-4.06-19.756-1.994-10.98-3.067-19.279-1.072-8.299-1.605-16.166t-.306-15.07q.227-7.2 1.073-12.755t1.997-11.946 2.683-11.453 3.706-9.878 5.22-10.02q3.047-5.203 5.921-8.304t6.478-6.7q3.604-3.6 8.299-7.038t9.013-5.39q4.318-1.95 9.602-3.962 5.284-2.01 10.48-3.177t9.54-1.165 9.35.421q5.009.42 11.689 3.105 6.68 2.687 12.617 6.46t8.967 6.724 3.025 2.96Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m260.12 323.822 3.588.189q3.588.188 8.693.547 5.105.358 8.931.805t7.66 1.199 7.384 1.356 6.71 1.147 5.61.68q2.448.137 5.152.48 2.703.344 4.404.35 1.7.007 4.053.013t4.459-.057 4.885-.251 5.042-.627 3.801-.745 3.123-.983 3.026-1.531q1.442-.854 3.492-2.377t3.477-2.93 1.853-3.296-1.335-2.863q-1.76-.972-4.65-1.142t-4.982-.136-3.968.468q-1.876.434-4.166 1.545-2.289 1.112-4.24 2.835-1.952 1.724-3.959 3.525-2.007 1.802-4.527 3.77-2.52 1.969-5.837 4.63t-6.424 5.113q-3.11 2.452-6.131 4.568t-6.534 4.361q-3.512 2.246-6.687 3.736t-6.184 2.654-5.086 1.817-3.808 1.033-3.41.337-3.996-1.015-3.575-2.832-.926-3.439 2.254-2.96 5.213-1.657 11.303.89 16.601 3.39 17.457 5.153 15.089 5.027 11.34 3.846 11.405 3.328q6.29 1.583 11.991 2.822 5.703 1.238 12.804 2.325 7.1 1.086 13.146 1.556 6.044.469 11.644.674 5.599.204 12.112.57 6.513.367 11.485.801t9.562.62 7.37.212 4.787-.111q2.01-.136 3.688-.287 1.679-.152 3.637-.418 1.96-.266 2.94-.418t1.181-.126q.202.024.391.097.19.072.357.188.167.115.301.267.135.153.229.332t.142.378q.048.197.048.4t-.05.4q-.048.197-.143.376-.095.18-.23.332-.134.151-.301.266-.168.115-.358.187t-.391.096-2.223-.946-4.693-3.235-4.738-3.267-3.631-2.025-3.064-1.326q-1.498-.305-3.063-.153t-3.223 1.484-2.994 2.56-2.601 2.514-2.596 3.002q-1.331 1.717-2.925 3.076t-2.66 2.515q-1.064 1.156-2.319 2.674-1.254 1.517-3.391 3.576t-5.313 4.554-5.599 3.854-4.88 2.646q-2.46 1.287-6.166 2.56t-6.923 2.265-6.85 1.644q-3.635.653-7.14.61-3.507-.042-6.369-.328t-6.026-1.293q-3.165-1.008-5.404-2.185-2.24-1.177-4.047-3.418-1.808-2.24-2.945-4.275-1.138-2.035-1.412-4.393t.018-5.295.896-5.35 2.37-4.857 3.262-4.338 2.936-3.349 3.81-3.086 4.774-2.906 4.487-2.408 4.998-2.057 5.186-1.933 4.987-1.446 4.676-.736 3.634-.507 3.947.288 4.193 1.564 3.83 2.708q1.906 1.638 3.345 3.845t2.093 4.664q.654 2.456-.103 6.39-.758 3.935-2.552 7.52-1.793 3.586-6.214 7.318-4.42 3.733-9.344 6.374-4.925 2.642-10.336 4.569-5.41 1.926-14.889 3.007-9.479 1.08-17.915.7t-15.879-1.654-16.118-4.576q-8.676-3.304-15.665-6.64-6.99-3.335-13.263-6.408t-10.59-5.207-7.252-3.317q-2.935-1.183-5.576-1.9t-4.337-.859-3.482-.127-4.106.598-3.588 1.437-3.602 4.134-3.512 5.613q-1.18 2.331-1.93 4.647-.752 2.316-1.195 5.137-.444 2.822-.318 5.383.125 2.56.405 5.31.28 2.748.76 4.992.48 2.245 1.043 3.978t1.743 4.059 2.556 4.091q1.374 1.767 3.484 4.551t4.601 5.073 5.189 4.395q2.698 2.108 6.577 4.394t7.184 4.382 7.456 4.647 7.56 4.47q3.411 1.916 6.237 3.564t5.404 3.455q2.579 1.808 4.578 3.01t3.487 2.188 2.969 1.88 3.265 2.455 3.367 2.371 1.8.949.395.323.306.408.2.47.08.503-.04.508-.163.484-.273.43q-.163.2-.368.353-.206.154-.442.255-.237.1-.49.141-.254.04-.51.02-.256-.021-.5-.103-.243-.082-.427-1.883-.183-1.801.993-3.865t2.298-4.708 2.261-5.994 2.238-7.235 1.888-7.173q.79-3.289 1.103-6.045.313-2.757.235-6.383t-.274-5.733q-.196-2.105-.778-4.586t-1.384-4.906q-.803-2.425-1.743-4.519t-1.925-4.062-2.6-4.475-3.428-4.357-3.48-3.428q-1.663-1.58-3.456-3.368t-3.187-3.018-3.068-2.876q-1.673-1.647-3.441-3.458-1.768-1.81-3.596-3.46-1.827-1.648-3.017-2.613t-2.706-.206-1.48 2.511q.038 1.752-.038 4.642t-.153 4.684.272 4.769.812 5.761.925 5.751q.463 2.964.734 4.555t.427 3.299q.157 1.707.185 3.557t.115 4.567q.088 2.718.066 4.413t-.02 3.242-.032 3.307-.374 3.81-.444 3.564-.432 3.007-.752 3.104-1.27 4.141-1.783 3.842-2.23 2.678q-1.292 1.366-2.501 2.37-1.21 1.003-3.682 2.739t-4.213 2.165-3.63.543-3.742-.131-5.22-1.843-4.607-2.761-3.104-3.276-2.4-3.84q-.537-1.729-.67-3.592-.133-1.864-.136-3.743-.003-1.88.703-4.383.706-2.502 2.372-5.007t3.206-4.565 3.778-4.243 3.943-3.97 3.936-3.18q2.23-1.393 3.916-2.552 1.687-1.16 4.003-1.748 2.315-.59 5.817-.608 3.5-.018 6.644.315 3.143.334 6.976 1.353t7.374 2.31q3.542 1.29 6.702 2.968t6.703 4.338q3.544 2.661 6.14 4.901t4.559 4.27q1.962 2.03 3.675 3.957t2.84 3.539q1.13 1.611 1.966 3.437t1.01 3.611q.173 1.787-.626 3.615-.8 1.828-3.626 4.158t-6.28 4.077-8.543 2.997-9.454 1.745-8.169.127-7.895-1.366-7.21-2.267-5.823-3.194q-2.705-1.928-4.722-3.81-2.016-1.88-3.512-3.744t-2.474-4.07q-.977-2.207-1.755-3.926t-1.187-3.64-.528-4.904 1.196-5.004 3.077-3.48 4.329-2.563 6.59-1.154q4.022-.049 7.896.574 3.874.622 9.105 2.317t9.918 3.827l9.137 4.155q4.449 2.025 10.739 4.829t11.712 5.108 12.121 4.115q6.7 1.812 12.573 2.589t11.395.563q5.521-.214 11.996-2.501 6.474-2.287 11.433-4.908 4.958-2.62 9.546-6.21 4.588-3.588 7.918-6.764t5.571-6.178 3.745-5.38 1.507-2.376l.008.005q.004.003-1.499 2.382t-3.742 5.387-5.562 6.194-7.908 6.792q-4.584 3.605-9.543 6.245t-11.45 4.952-12.03 2.552-11.436-.508-12.631-2.525-12.183-4.027q-5.449-2.251-11.773-4.98t-10.817-4.648-9.179-3.884-9.843-3.424-8.877-1.779-7.192.01-5.58 1.404-3.568 2.16q-1.46 1.085-2.541 2.451t-1.419 3.847-.2 4.256q.136 1.776.646 3.572.51 1.795 1.264 3.97.754 2.174 2.038 4.137 1.283 1.964 3.214 3.903 1.93 1.939 4.624 3.814t5.797 3.078 7.17 2.12q4.064.918 7.789 1.179 3.724.26 7.997-.365 4.274-.625 9.141-2.006 4.868-1.381 7.99-3.236 3.122-1.854 5.399-4.108 2.276-2.254 3.252-4.838t.431-4.376q-.544-1.793-1.367-3.508T331.486 437q-1.585-2.012-3.492-4.067t-4.529-4.242-6.167-4.756-6.701-4.126-6.69-2.689-7.287-1.929-6.778-.843-6.276.335q-3.246.381-5.14.734t-3.631 1.409-3.675 2.282-3.559 3.013-3.318 4.12-2.938 4.42q-1.24 2.088-2.227 4.156t-1.339 3.844q-.35 1.776-.135 4.872.216 3.095.739 4.591t2.146 3.25 3.9 2.864 4.97 1.193q2.693.081 4.608-.483 1.914-.565 3.885-2.149 1.971-1.583 3.721-3.627t2.509-3.922q.758-1.88 1.483-4.501t.855-4.333q.13-1.71.34-3.358t.175-3.403q-.036-1.755-.038-3.296-.002-1.542-.034-3.222-.031-1.68-.016-4.323.014-2.642-.208-5.734t-.737-6.239q-.514-3.147-1.006-6.185t-.947-5.877q-.456-2.839-.78-4.692t-.396-3.665-.117-3.479.05-4.277q.098-2.611.765-4.762.668-2.15 2.548-3.752t4.21-1.287q2.328.315 3.797.842t2.561 1.873q1.093 1.346 2.734 3.308 1.64 1.961 2.983 4.048t2.988 3.76 2.871 3.071 3.011 3.2 3.349 3.483 3.46 3.618 3.825 4.446 2.803 4.572 1.711 4.262 1.63 4.697 1.367 5.113.509 4.728.162 5.816-.035 6.53-.83 6.191q-.565 3.366-1.36 7.36-.793 3.994-1.517 7.515-.725 3.522-1.392 6.678t-2.325 5.6q-1.657 2.442-2.108.942t-.234-1.363.394.323q.178.185.306.408t.2.47q.07.246.08.503t-.04.508q-.053.252-.163.484t-.273.43q-.163.2-.368.353-.206.154-.442.255-.237.1-.49.14-.254.042-.51.02-.256-.02-.5-.102-.243-.081-.815-.63-.572-.548-1.782-1.696-1.21-1.149-2.467-2.948t-2.592-2.949-2.584-2.383-3.095-2.66-4.43-3.212-5.423-3.406-6.275-3.505-7.618-4.388-7.52-4.527-7.313-4.243-6.796-4.233-5.538-4.238-5.081-4.87-3.744-4.587q-1.38-1.94-2.786-4.445-1.408-2.506-1.751-4.363-.344-1.857-.7-4.171-.355-2.314-.744-5.107-.39-2.793-.543-5.494t.042-5.777.95-5.566 1.82-4.983 2.414-5.201 2.796-3.979 3.328-2.147 4.426-.909 4.38.264q1.833.296 3.47.814 1.64.518 4.25 1.356 2.61.837 5.551 2.015t7.263 3.302q4.323 2.125 10.602 5.184 6.278 3.059 13.268 6.373t15.652 6.585q8.662 3.27 16.089 4.503 7.427 1.232 15.83 1.561 8.404.33 17.808-.808t14.724-3.134q5.319-1.997 10.085-4.698 4.767-2.7 8.891-6.354t5.583-7.075 1.875-6.902-.06-5.508-1.692-3.889-2.967-3.318-3.249-2.48q-1.498-1.022-3.386-1.566t-3.517-.599q-1.629-.055-3.56-.002-1.93.053-4.474.452-2.542.4-4.874 1.35-2.331.953-5.055 2.055t-4.84 2.14-4.404 2.283q-2.287 1.245-4.476 2.946t-3.702 2.906-3.069 2.973-3.09 4.058-2.208 4.525-.801 5.059-.087 4.94q.04 2.118.934 4.133.895 2.015 2.574 4.12 1.68 2.104 3.756 3.374t5.177 2.13 5.907 1.08q2.807.222 6.157.075t6.776-1.036 6.45-2.228q3.024-1.339 6.224-2.957 3.2-1.619 5.325-3.248 2.125-1.628 4.008-3.24 1.882-1.613 4.457-4.335 2.574-2.722 3.673-3.954t2.482-2.71 2.971-3.069 2.807-2.666 2.472-2.437q1.253-1.363 2.91-3.29 1.655-1.928 3.016-3.104 1.362-1.175 3.293-2.55 1.931-1.376 3.237-2.264t3.117-1.204q1.811-.315 3.392-.132 1.581.182 3.368.842t3.715 2.324 4.107 3.167 4.204 3.006 3.495 3 1.671 1.524.391.097.357.188.301.267.229.332.142.377.048.4q0 .204-.05.4-.048.198-.143.377-.094.18-.23.332-.134.151-.301.266-.168.115-.358.187t-.391.096-1.183-.13-2.943-.438-3.642-.462-3.685-.381-4.782-.331-7.37-.307-9.565-.597-11.483-.768-12.117-.527-11.664-.614-13.18-1.475-12.845-2.214-12.064-2.674-11.493-3.122-11.428-3.552q-6.275-1.93-15.151-4.604-8.877-2.673-17.403-4.545-8.527-1.872-16.164-2.576t-10.053-.19-3.945 1.188q-1.53.674-.385 2.247 1.145 1.574 3.327 2.337t3.883.707 3.806-.423 5.052-1.61q2.947-1.242 6.005-2.817t6.437-3.951q3.378-2.376 6.199-4.654t5.681-4.976 5.815-5.679q2.953-2.98 4.814-5.21 1.86-2.228 4.768-6.012t4.45-5.17q1.54-1.388 3.504-2.278t4.087-1.314q2.124-.423 3.596-.718 1.473-.294 3.66-.207t3.762.12 3.415.124 3.554.524 3.527 2.165q1.813 1.733 2.28 3.924.466 2.192.089 3.998t-1.505 3.208q-1.129 1.401-3.117 2.869-1.988 1.467-4.513 2.818t-4.224 2.127-3.62 1.34-3.44.588-3.862.359-5.213.675-4.986.219-4.509-.248-4.083-.437-4.37-.706q-2.682-.398-5.126-.707t-5.61-.819l-6.727-1.084q-3.56-.575-7.38-1.3-3.822-.726-7.639-1.164t-8.917-.864q-5.1-.427-8.674-.79-3.574-.362-3.573-.372Z'
        />
        <path
            fill='hsl(0, 0%, 0%)'
            d='m362.63 469.452 3.825-1.729q3.823-1.729 7.385-3.27 3.561-1.542 8.925-4.127t11.773-6.157q6.41-3.57 11.067-6.451 4.658-2.881 8.02-5.197 3.36-2.315 6.165-4.942 2.805-2.626 4.796-4.6 1.992-1.975 2.993-3.953t1.603-3.669q.603-1.69.473-4.355-.13-2.664-1.675-5.173-1.546-2.508-3.509-4.24t-4.104-2.695-4.66-1.72q-2.52-.757-4.42-.957t-3.51-.216-4.084.098q-2.472.113-5.064 1.887t-3.953 2.982-2.358 2.933-1.44 3.964-.653 4.576.634 6.526 1.496 6.852 2.478 5.959 3.674 5.83q1.852 2.537 3.992 4.727t3.728 3.562 3.133 3.061q1.546 1.69 2.809 2.87 1.262 1.181 2.397 2.178t2.462 2.221 2.487 2.253 2.92 2.526 2.827 3.16.916 4.7q-.15 3.034-2.43 4.794t-5.04 2.884q-2.761 1.123-6.785 1.984t-7.407 1.14q-3.382.277-6.188.4-2.807.125-6.26-.466-3.452-.592-6.29-1.409t-5.442-1.993q-2.604-1.176-4.597-2.121-1.992-.946-3.752-2.163t-3.164-2.888q-1.404-1.671-2.348-2.895-.945-1.224-1.486-2.748-.54-1.524-.975-3.847t.122-4.292 2.464-3.816 6.018-3.231q4.11-1.386 8.037-2.116t8.101-.978 9.275.247 8.898 1.012 6.788 1.037 5.411 1.193 4.303 1.129 3.604 1.159 3.104 1.533 3.647 2.157 3.717 2.402 1.73 1.269q.278.195.452.404.173.21.292.454t.176.51.048.538q-.009.272-.082.534t-.207.498-.321.435-.415.345-.486.236-.528.112q-.27.024-.54-.017-.268-.041-.52-.146-.25-.104-.47-.266-.218-.161-8.361-4.011t-14.645-8.128-18.029-11.935q-11.526-7.656-20.524-13.706-9-6.05-16.94-11.687t-15.978-11.359q-8.037-5.723-13.92-10.104-5.884-4.381-10.301-7.633t-8.765-6.296q-4.347-3.044-7.298-5.726t-5.3-4.926-4.448-4.855-3.309-4.803q-1.21-2.191-1.981-4.795t-1.126-4.256-.551-3.608q-.199-1.955-.558-3.99-.36-2.034-.356-2.037l.008-.006q.004-.003.516 2.028.512 2.03.711 3.963.2 1.933.503 3.584t1.077 4.23 1.903 4.802 3.24 4.815 4.477 4.814 5.332 4.862q2.964 2.641 7.35 5.64 4.384 2.997 8.848 6.186t10.403 7.48q5.94 4.293 14.054 9.903t16.143 11.086q8.029 5.475 17.16 11.311t20.823 13.185q11.69 7.35 18.336 11.157 6.646 3.809 13.56 7.092t8.87 3.782 2.129.708.292.454q.119.244.176.51t.048.538-.082.534q-.073.261-.207.498t-.32.435q-.188.197-.416.345-.229.147-.486.235-.257.089-.528.113-.27.024-.54-.017-.268-.041-.52-.146-.25-.104-.47-.265-.218-.162-.923-1.015t-2.164-2.382q-1.46-1.53-3.596-3.275t-3.627-2.646q-1.491-.9-3.278-1.633-1.788-.732-4.112-1.553-2.324-.82-5.315-1.228-2.99-.407-6.783-.77t-8.777-.65-8.98.229-7.631 1.57-6.943 2.584-5.096 3.75-1.805 4.218.793 4.454 1.906 4.072 2.618 2.927 3.372 2.448 4.388 2.244 5.33 1.8q2.79.683 6.093 1.032 3.304.35 6.027.093t5.869-.875 6.705-1.863q3.56-1.246 5.68-2.489t3.976-2.898 1.324-3.164-1.98-3.23q-1.449-1.722-2.472-2.894t-2.24-2.533-2.178-2.558-2.04-2.588l-2.447-3.158q-1.37-1.768-2.752-3.344-1.383-1.577-3.64-3.733-2.255-2.155-4.267-4.66-2.012-2.503-4.094-5.883t-2.839-6.05q-.756-2.672-1.94-7.148-1.182-4.476-.967-6.97t.763-5.14 1.89-4.64q1.34-1.994 2.884-3.057t4.494-3.332 5.74-2.6 4.483-.09 3.685.637 4.735 1.05q2.745.652 5.213 1.71t4.866 2.78 3.753 3.53q1.354 1.808 1.611 3.478.258 1.67-.238 4.774-.495 3.105-1.407 4.707-.911 1.603-2.176 3.486t-3.31 3.809-4.845 4.588-6.152 5.012-8 5.262-11.072 6.49-11.802 6.149q-5.38 2.57-8.953 4.086t-7.461 3.093q-3.89 1.576-3.893 1.567Z'
        />
    </svg>
)
export default SvgTetera