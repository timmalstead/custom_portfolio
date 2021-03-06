import React from "react"

const mobileIcons = [
  {
    key: "GitHub",
    url: "https://github.com/timmalstead",
    viewBox: "0 0 35.821 35",
    path: (
      <path
        d="M17.97,0C8.026,0,0,8.026,0,17.97c0,7.906,5.151,14.615,12.339,17.012c0.958,0.12,1.198-0.359,1.198-0.839
	v-3.115c-5.032,1.078-6.11-2.396-6.11-2.396c-0.839-2.037-2.037-2.636-2.037-2.636c-1.677-1.078,0.12-1.078,0.12-1.078
	c1.797,0.12,2.755,1.797,2.755,1.797c1.558,2.756,4.193,1.917,5.271,1.438c0.12-1.198,0.599-1.917,1.198-2.396
	c-3.954-0.479-8.146-2.037-8.146-8.865c0-1.917,0.719-3.594,1.797-4.792c-0.239-0.479-0.838-2.276,0.12-4.792
	c0,0,1.557-0.479,4.912,1.797c1.438-0.359,2.995-0.599,4.552-0.599c1.558,0,3.115,0.24,4.553,0.599
	c3.474-2.276,4.912-1.797,4.912-1.797c0.958,2.516,0.359,4.313,0.12,4.792c1.198,1.198,1.797,2.875,1.797,4.792
	c0,6.948-4.193,8.386-8.146,8.865c0.599,0.599,1.198,1.677,1.198,3.354v4.911c0,0.479,0.359,1.079,1.198,0.839
	c7.188-2.396,12.219-9.104,12.219-17.012C35.94,8.026,27.913,0,17.97,0z"
      />
    ),
  },
  {
    key: "LinkedIn",
    url: "https://www.linkedin.com/in/timmalstead/",
    viewBox: "0 0 35 35",
    path: (
      <path
        d="M17.5,0C7.835,0,0,7.835,0,17.5S7.835,35,17.5,35S35,27.165,35,17.5S27.165,0,17.5,0z M12.096,27.264H7.484
	V13.388h4.612V27.264z M9.791,11.494h-0.03c-1.549,0-2.549-1.066-2.549-2.398c0-1.361,1.032-2.397,2.61-2.397
	c1.577,0,2.548,1.036,2.579,2.397C12.4,10.428,11.398,11.494,9.791,11.494z M28.727,27.264h-4.612v-7.423
	c0-1.866-0.667-3.138-2.336-3.138c-1.274,0-2.034,0.858-2.366,1.687c-0.122,0.297-0.152,0.71-0.152,1.126v7.749h-4.613
	c0,0,0.062-12.574,0-13.876h4.613v1.966c0.612-0.946,1.707-2.292,4.157-2.292c3.035,0,5.31,1.983,5.31,6.245V27.264z"
      />
    ),
  },
  {
    key: "Medium",
    url: "https://medium.com/@timmalstead",
    viewBox: "0 0 37 37",
    path: (
      <g>
        <defs>
          <clipPath id="A">
            <circle cx="17.6574" cy="17.6574" stroke="none" r="17.4803" />
          </clipPath>
        </defs>
        <path
          d="M0 0h35.1377v35.1377H0zm8.385 11.7515a.914.914 0 0 0-.2975-.7712L5.8836 8.325v-.3966h6.8435l5.2897 11.6 4.6506-11.6h6.524v.3966L27.307 10.132a.551.551 0 0 0-.2094.5289v13.2756c-.0337.2014.047.405.2094.5288l1.8404 1.8068v.3966h-9.257v-.3966l1.9065-1.851c.1873-.1873.1873-.2423.1873-.5288V13.1616l-5.3007 13.463h-.7163l-6.1714-13.463v9.023a1.245 1.245 0 0 0 .3417 1.0356l2.4795 3.0077v.3966H5.586v-.3966l2.4796-3.0077a1.201 1.201 0 0 0 .3195-1.0356V11.7515z"
          stroke="none"
          transform="translate(.8229 .8229)"
          clip-path="url(#A)"
        />
      </g>
    ),
  },
  {
    key: "Resume",
    url:
      "https://drive.google.com/file/d/1udWPDtY15T0fssbQtD3Y9_iRZrhCpoL8/view",
    viewBox: "0 0 35 35",
    path: (
      <g>
        <polygon points="19.217,17.032 10.657,17.032 10.657,26.527 24.343,26.527 24.343,8.473 19.217,8.473 	" />
        <polygon points="17.216,8.766 10.95,15.032 17.216,15.032 	" />
        <path
          d="M17.5,0C7.835,0,0,7.835,0,17.5S7.835,35,17.5,35S35,27.165,35,17.5S27.165,0,17.5,0z M27.343,8.473v18.055
		v3h-3H10.657h-3v-3V15.188v-1.242l0.879-0.879l6.716-6.716l0.878-0.879h1.243h6.969h3V8.473z"
        />
      </g>
    ),
  },
  {
    key: "Contact",
    url: "mailto:timmalstead@gmail.com?subject=Hello Tim",
    viewBox: "0 0 35 35",
    path: (
      <g>
        <polygon points="17.5,17.501 28.094,12.1 6.907,12.1 	" />
        <path
          d="M17.5,0C7.835,0,0,7.835,0,17.5S7.835,35,17.5,35S35,27.165,35,17.5S27.165,0,17.5,0z M30.813,23.203v2.719
		h-2.719H6.907H4.188v-2.719V11.798v-2.72h2.719h21.187h2.719v2.72V23.203z"
        />
        <polygon
          points="17.5,20.553 16.265,19.924 6.907,15.152 6.907,23.203 28.094,23.203 28.094,15.152 18.735,19.924 	
		"
        />
      </g>
    ),
  },
]

export default mobileIcons
