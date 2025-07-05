import React from "react";
import NextLink from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  as?: React.ElementType;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ as: Comp = NextLink, href, children, ...props }, ref) => {
    return (
      <Comp href={href} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);

Link.displayName = "Link";

export { Link };
