'use client'

import {
  Header,
  HeaderContainer,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from '@carbon/react'
import dynamic from 'next/dynamic'
import { Fragment, PropsWithChildren, ReactNode } from 'react'

const ThemeSwitcherAction = dynamic(
  () => import('./page-header/theme-switcher-action'),
  {
    ssr: false,
  }
)

interface HeaderBrandProps {
  title?: string
}
function HeaderBrand(props: HeaderBrandProps) {
  return <HeaderName prefix='Fortius Backoffice'>{props.title}</HeaderName>
}

export interface PageHeaderProps extends HeaderBrandProps {}
export function PageHeader(props: PageHeaderProps) {
  return (
    <Header aria-label='Header'>
      <SkipToContent />
      <HeaderBrand title={props.title} />
      <HeaderGlobalBar>
        <ThemeSwitcherAction />
      </HeaderGlobalBar>
    </Header>
  )
}

export interface PageHeaderWithMenuProps
  extends PropsWithChildren,
    HeaderBrandProps {
  menuItems: ReactNode
}
export function PageHeaderWithMenu(props: PageHeaderWithMenuProps) {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Fragment>
          <Header aria-label='Header'>
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              aria-expanded={isSideNavExpanded}
              isActive={isSideNavExpanded}
              onClick={onClickSideNavExpand}
            />
            <HeaderBrand title={props.title} />
            <HeaderNavigation aria-label='Header navigation'>
              {props.menuItems}
            </HeaderNavigation>
            <HeaderGlobalBar>
              <ThemeSwitcherAction />
            </HeaderGlobalBar>
            {/* @ts-ignore */}
            <SideNav
              isPersistent={false}
              aria-label='Side navigation'
              expanded={isSideNavExpanded}
              onSideNavBlur={onClickSideNavExpand}
            >
              <SideNavItems>
                <HeaderSideNavItems>{props.menuItems}</HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </Header>
          {props.children}
        </Fragment>
      )}
    />
  )
}
