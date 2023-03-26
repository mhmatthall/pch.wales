// pch.wales custom NavLink component
//    Allows for determining active page in navbar for conditional formatting when using CSS modules
//    Based on: https://jasonwatmore.com/post/2021/06/01/next-js-navlink-component-example-with-active-css-class
import Link from 'next/link';
import { useRouter } from 'next/router';

NavLink.defaultProps = {
  exact: false
};

export default function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  // Set `id` property rather than `class` to avoid CSS module name-mangling issues
  if (isActive) {
    props.id = "active";
  }

  // Removed child <a> because new convention
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}