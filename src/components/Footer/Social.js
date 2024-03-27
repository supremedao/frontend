"use client";
import Typography from "@/components/Typography";
import Link from "@/components/Link";

export default function Social() {
  return (
    <article className={""}>
      <Typography variant={"h3"} className={"mb-6 font-semibold"}>
        Follow us
      </Typography>

      <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 ">
        <li className={"flex"}>
          <Link
            href="https://mirror.xyz/0x4A2D30c7b9f7907D580f9A1902D42dd78B21F0d2"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Mirror</span>

            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="50" rx="25" fill="#254CF7" />
              <g clip-path="url(#clip0_312_21)">
                <path
                  d="M15 21.9891C15 16.2881 19.6216 11.6665 25.3226 11.6665C31.0236 11.6665 35.6452 16.2881 35.6452 21.9891V36.7646C35.6452 37.6309 34.9429 38.3332 34.0765 38.3332H16.5686C15.7023 38.3332 15 37.6309 15 36.7646V21.9891Z"
                  fill="url(#paint0_linear_312_21)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.4187 37.0519V22.0192C34.4187 16.9809 30.3463 12.8965 25.3226 12.8965C20.2989 12.8965 16.2264 16.9809 16.2264 22.0192V37.0519C16.2264 37.0803 16.2493 37.1032 16.2775 37.1032H34.3676C34.3959 37.1032 34.4187 37.0803 34.4187 37.0519ZM25.3226 11.6665C19.6216 11.6665 15 16.3015 15 22.0192V37.0519C15 37.7595 15.572 38.3332 16.2775 38.3332H34.3676C35.0732 38.3332 35.6452 37.7595 35.6452 37.0519V22.0192C35.6452 16.3015 31.0236 11.6665 25.3226 11.6665Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_312_21"
                  x1="17.6573"
                  y1="13.204"
                  x2="35.7203"
                  y2="41.8571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.265625" stop-color="white" />
                  <stop offset="0.734375" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_312_21">
                  <rect
                    width="20.7568"
                    height="26.6667"
                    fill="white"
                    transform="translate(15 11.6665)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </li>

        <li className={"flex"}>
          <Link
            href="https://twitter.com/supreme_dao"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Twitter</span>

            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="50" rx="25" fill="#254CF7" />
              <path
                d="M26.9945 23.3698L34.6445 13.8887H31.2301L25.3912 21.1298L20.2112 13.8887H12.7778L21.4512 26.0109L13.3001 36.1109H16.7156L23.0545 28.2553L28.6778 36.1109H36.1112L26.9945 23.3698ZM24.3501 26.6476L22.7445 24.4042L16.5112 15.6964H19.0778L24.1089 22.7153L25.7123 24.9598L32.3989 34.3031H29.8323L24.3501 26.6476Z"
                fill="white"
              />
            </svg>
          </Link>
        </li>

        <li className={"flex"}>
          <Link
            href="//t.me/supremedaochat"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Telegram</span>

            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="50" rx="25" fill="#254CF7" />
              <g clip-path="url(#clip0_312_15)">
                <path
                  d="M36.6603 16.7836C36.3142 20.4435 34.8145 29.3383 34.0531 33.4382C33.7301 35.1755 33.084 35.7546 32.4841 35.8241C31.1459 35.9399 30.1307 34.9439 28.8386 34.0868C26.8082 32.7433 25.6545 31.9094 23.6933 30.6123C21.4091 29.1067 22.8857 28.2728 24.2009 26.9293C24.547 26.5818 30.4537 21.1847 30.5691 20.6983C30.5851 20.6246 30.583 20.5481 30.5628 20.4754C30.5427 20.4028 30.5053 20.3361 30.4537 20.2813C30.3153 20.1655 30.1307 20.2118 29.9692 20.235C29.7615 20.2813 26.5313 22.4355 20.2324 26.6976C19.3094 27.323 18.4788 27.6473 17.7405 27.6242C16.9098 27.601 15.3409 27.1609 14.1642 26.7671C12.7106 26.3038 11.58 26.049 11.6723 25.2383C11.7184 24.8214 12.2952 24.4044 13.3797 23.9643C20.117 21.0225 24.5932 19.0768 26.8312 18.1503C33.2455 15.4633 34.5607 15 35.4375 15C35.622 15 36.0604 15.0463 36.3373 15.278C36.568 15.4633 36.6373 15.7181 36.6603 15.9034C36.6373 16.0424 36.6834 16.4593 36.6603 16.7836Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_312_15">
                  <rect
                    width="26.6667"
                    height="26.6667"
                    fill="white"
                    transform="translate(11.667 11.6665)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </li>
      </ul>
    </article>
  );
}
