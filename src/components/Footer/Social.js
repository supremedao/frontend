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
            className="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Mirror</span>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#3E6CF4" />
              <g clipPath="url(#clip0_312_21)">
                <path
                  d="M18 26.3871C18 19.5459 23.5459 14 30.3871 14C37.2284 14 42.7742 19.5459 42.7742 26.3871V44.1177C42.7742 45.1573 41.9315 46 40.8918 46H19.8824C18.8428 46 18 45.1573 18 44.1177V26.3871Z"
                  fill="url(#paint0_linear_312_21)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.3024 44.4624V26.4232C41.3024 20.3772 36.4156 15.476 30.3871 15.476C24.3587 15.476 19.4717 20.3772 19.4717 26.4232V44.4624C19.4717 44.4965 19.4992 44.524 19.5331 44.524H41.2412C41.2751 44.524 41.3024 44.4965 41.3024 44.4624ZM30.3871 14C23.5459 14 18 19.5621 18 26.4232V44.4624C18 45.3116 18.6864 46 19.5331 46H41.2412C42.0879 46 42.7742 45.3116 42.7742 44.4624V26.4232C42.7742 19.5621 37.2284 14 30.3871 14Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_312_21"
                  x1="21.1888"
                  y1="15.845"
                  x2="42.8643"
                  y2="50.2287"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.265625" stopColor="white" />
                  <stop offset="0.734375" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_312_21">
                  <rect
                    width="24.9081"
                    height="32"
                    fill="white"
                    transform="translate(18 14)"
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
            className="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Twitter</span>

            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#3E6CF4" />
              <path
                d="M32.3935 28.0438L41.5735 16.6665H37.4762L30.4695 25.3558L24.2535 16.6665H15.3335L25.7415 31.2132L15.9602 43.3332H20.0588L27.6655 33.9065L34.4135 43.3332H43.3335L32.3935 28.0438ZM29.2202 31.9772L27.2935 29.2852L19.8135 18.8358H22.8935L28.9308 27.2585L30.8548 29.9518L38.8788 41.1638H35.7988L29.2202 31.9772Z"
                fill="white"
              />
            </svg>
          </Link>
        </li>

        <li className={"flex"}>
          <Link
            href="t.me/supremedaochat"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Telegram</span>

            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#3E6CF4" />
              <path
                d="M43.992 20.1403C43.5767 24.5321 41.777 35.2059 40.8633 40.1259C40.4757 42.2106 39.7004 42.9055 38.9805 42.9889C37.3747 43.1279 36.1564 41.9327 34.6059 40.9042C32.1694 39.292 30.785 38.2913 28.4316 36.7347C25.6905 34.928 27.4625 33.9273 29.0407 32.3151C29.456 31.8982 36.544 25.4216 36.6825 24.8379C36.7017 24.7495 36.6992 24.6577 36.675 24.5705C36.6509 24.4833 36.6059 24.4034 36.544 24.3376C36.3779 24.1986 36.1564 24.2542 35.9626 24.282C35.7134 24.3376 31.8372 26.9226 24.2784 32.0372C23.1709 32.7877 22.1742 33.1768 21.2882 33.149C20.2914 33.1212 18.4087 32.5931 16.9966 32.1205C15.2523 31.5646 13.8956 31.2589 14.0063 30.286C14.0617 29.7857 14.7539 29.2853 16.0552 28.7572C24.14 25.2271 29.5114 22.8922 32.1971 21.7803C39.8942 18.5559 41.4724 18 42.5246 18C42.7461 18 43.2721 18.0556 43.6044 18.3336C43.8813 18.5559 43.9643 18.8617 43.992 19.0841C43.9643 19.2508 44.0197 19.7512 43.992 20.1403Z"
                fill="white"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </article>
  );
}
