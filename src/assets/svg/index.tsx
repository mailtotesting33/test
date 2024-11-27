import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Path,
  Rect,
} from 'react-native-svg';
import {COLORS} from '../../shared/theme/colors';

export function ArrowIconSvg(props: any) {
  return (
    <Svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx="32" cy="32" r="32" fill="#0FB5C8" />
      <Path
        d="M43.3761 25.0439L44.6694 23.7508C44.8842 23.5358 44.955 23.2155 44.8507 22.9301C44.7463 22.6445 44.4857 22.4455 44.1825 22.4198L41.7832 22.2174L41.5808 19.8181C41.5554 19.5152 41.3562 19.2546 41.0708 19.1502C40.7853 19.0456 40.4651 19.1164 40.25 19.3315L38.9567 20.6246C36.8652 19.3422 34.4739 18.667 32.0003 18.667C28.4389 18.667 25.0905 20.0539 22.5722 22.5722C20.0539 25.0905 18.667 28.4389 18.667 32.0003C18.667 35.5617 20.0539 38.9101 22.5722 41.4284C25.0905 43.9467 28.4389 45.3337 32.0003 45.3337C35.5617 45.3337 38.9101 43.9467 41.4284 41.4284C43.9467 38.9101 45.3337 35.5617 45.3337 32.0003C45.3337 29.5268 44.6584 27.1356 43.3761 25.0439ZM40.2816 23.0062C40.3137 23.3858 40.6148 23.6869 40.9945 23.7191L42.3749 23.8354L40.5064 25.7039L38.4686 25.532L38.2967 23.4943L40.1652 21.6258L40.2816 23.0062ZM34.6566 32.0003C34.6566 33.465 33.465 34.6566 32.0003 34.6566C30.5357 34.6566 29.3441 33.465 29.3441 32.0003C29.3441 30.5357 30.5357 29.3441 32.0003 29.3441C32.4489 29.3441 32.8715 29.4562 33.2424 29.6533L31.448 31.448C31.1428 31.7529 31.1428 32.2475 31.448 32.5527C31.6003 32.7053 31.8003 32.7816 32.0003 32.7816C32.2003 32.7816 32.4003 32.7053 32.5527 32.5527L34.3473 30.7583C34.5445 31.1292 34.6566 31.5517 34.6566 32.0003ZM34.3781 28.5177C33.7006 28.0538 32.8817 27.7816 32.0003 27.7816C29.6741 27.7816 27.7816 29.6741 27.7816 32.0003C27.7816 34.3266 29.6741 36.2191 32.0003 36.2191C34.3266 36.2191 36.2191 34.3266 36.2191 32.0003C36.2191 31.119 35.9469 30.3001 35.483 29.6226L37.7136 27.392C38.7327 28.653 39.3441 30.2566 39.3441 32.0003C39.3441 36.0496 36.0496 39.3441 32.0003 39.3441C27.951 39.3441 24.6566 36.0496 24.6566 32.0003C24.6566 27.951 27.951 24.6566 32.0003 24.6566C33.7441 24.6566 35.3477 25.2679 36.6087 26.287L34.3781 28.5177ZM40.3235 40.3235C38.1004 42.5468 35.1445 43.7712 32.0003 43.7712C28.8562 43.7712 25.9003 42.5468 23.6772 40.3235C21.4539 38.1004 20.2295 35.1445 20.2295 32.0003C20.2295 28.8562 21.4539 25.9003 23.6772 23.6772C25.9003 21.4539 28.8562 20.2295 32.0003 20.2295C34.0572 20.2295 36.0496 20.7579 37.8166 21.7647L36.9354 22.6459C36.793 22.7883 36.7118 22.9791 36.7067 23.1783C36.7061 23.2068 36.707 23.2353 36.7092 23.264L36.8144 24.5105C35.4254 23.6145 33.7726 23.0941 32.0003 23.0941C27.0894 23.0941 23.0941 27.0894 23.0941 32.0003C23.0941 36.9112 27.0894 40.9066 32.0003 40.9066C36.9112 40.9066 40.9066 36.9112 40.9066 32.0003C40.9066 30.2281 40.3862 28.5752 39.4902 27.1863L40.7367 27.2915C40.7587 27.2931 40.7806 27.2941 40.8024 27.2941C40.8061 27.2941 40.8099 27.2937 40.8136 27.2935C40.824 27.2935 40.8341 27.2927 40.8445 27.2921C40.8614 27.2911 40.8785 27.29 40.8952 27.288C40.9056 27.2866 40.9159 27.285 40.9263 27.2833C40.9428 27.2807 40.9591 27.2776 40.9753 27.274C40.9857 27.2715 40.9959 27.2689 41.0061 27.2662C41.0219 27.262 41.0376 27.2571 41.0533 27.2518C41.0634 27.2483 41.0734 27.2449 41.0834 27.241C41.0986 27.2351 41.1137 27.2286 41.1287 27.2215C41.1383 27.2172 41.1479 27.2129 41.1574 27.208C41.1725 27.2003 41.1871 27.1918 41.2016 27.1832C41.2103 27.1779 41.2191 27.1731 41.2276 27.1678C41.2431 27.1576 41.2579 27.1466 41.2728 27.1354C41.2797 27.1301 41.2868 27.1254 41.2935 27.12C41.3147 27.1029 41.3352 27.0848 41.3548 27.0652L42.2359 26.1841C43.2428 27.951 43.7712 29.9434 43.7712 32.0003C43.7712 35.1445 42.5468 38.1004 40.3235 40.3235Z"
        fill="white"
      />
    </Svg>
  );
}

export function KMSvg(props: any) {
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.37747 18.0066L1.83942 19.8526C1.42646 19.9903 1 19.6829 1 19.2475V3.58549C1 3.31098 1.17566 3.06727 1.43607 2.98047L7.37747 1M7.37747 18.0066L13.7549 20.1324M7.37747 18.0066V1M7.37747 1L13.7549 3.12582M13.7549 20.1324L19.6963 18.152C19.9567 18.0651 20.1324 17.8214 20.1324 17.5469V1.88483C20.1324 1.44953 19.706 1.14215 19.293 1.27981L13.7549 3.12582M13.7549 20.1324V3.12582"
        stroke="#757575"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CloseSvg(props: any) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clip-path="url(#clip0_840_65070)">
        <Path
          d="M18 6L6 18"
          stroke="#1D1D1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        />
        <Path
          d="M6 6L18 18"
          stroke="#1D1D1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_840_65070">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function SearchSvg(props: any) {
  return (
    <Svg
      width={props.width || '16'}
      height={props.height || '16'}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Ellipse
        cx="9.14342"
        cy="9.41714"
        rx="8.14342"
        ry="8.41714"
        stroke="#1D1D1B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
      <Path
        d="M14.8076 15.709L18.0003 19.0004"
        stroke="#1D1D1B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
}

export function LeftArrowSvg(props: any) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clip-path="url(#clip0_852_12409)">
        <Path
          d="M5 12H19"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5 12L11 18"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5 12L11 6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_852_12409">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}