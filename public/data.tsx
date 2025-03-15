
const catalogIcon = ({ isActive }: { isActive: boolean }) => (
	<svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://wwww3.	org/2000/svg" transform="rotate(0) scale(1, 1)">
		<rect width="48" height="48" fill="#ffffff" fillOpacity="0.01"/>
		<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="3" strokeLinejoin="round"/>
		<rect x="4" y="28" width="16" height="16" rx="2" fill="none" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="3" strokeLinejoin="round"/>
		<rect x="28" y="4" width="16" height="16" rx="2" fill="none" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="3" strokeLinejoin="round"/>
		<path d="M28 28H44" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M36 36H44" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M28 44H44" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
)

const profileIcon = ({ isActive }: { isActive: boolean }) => (
	<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0) scale(1, 1)">
<g clipPath="url(#clip0_15_82)">
<rect width="28" height="28" fill="none"/>
<g filter="none">
<path d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
</g>
</g>
<defs>
<filter id="filter0_d_15_82" x="2.55444" y="3.5" width="18.8911" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"/>
</filter>
<clipPath id="clip0_15_82">
<rect width="24" height="24" fill="#ffffff"/>
</clipPath>
</defs>
</svg>
)

const calendarIcon = ({ isActive }: {isActive: boolean}) => (
	<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0) scale(1, 1)">
<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="1.5"/>
<path opacity="0.5" d="M7 4V2.5" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.5" d="M17 4V2.5" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.5" d="M2.5 9H21.5" stroke={isActive ? '#a199f8' : '#0400001e'} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
<path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
<path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
<path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
<path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
<path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill={isActive ? '#a199f8' : '#0400001e'}/>
</svg>
)

 const dataIcon = [
	{ id: 1, img: profileIcon, link: '/home/profile' },
	{ id: 2, img: calendarIcon, link: '/pp' },
	{ id: 3, img: catalogIcon, link: '/home/catalog' },
]



export default dataIcon