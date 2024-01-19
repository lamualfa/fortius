'use client'

import { Close, Logout, Settings, UserAvatar } from '@carbon/icons-react'
import {
  Button,
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderPanel,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
  Switcher,
  Tag,
} from '@carbon/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Fragment, PropsWithChildren, ReactNode, useState } from 'react'

import { Account } from '@/lib/auth'
import { RoleLabel } from '@/lib/const'

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

export interface AuthenticatedPageHeaderProps
  extends PropsWithChildren,
    HeaderBrandProps {
  menuItems: ReactNode
  account: Account
}
export function AuthenticatedPageHeader(props: AuthenticatedPageHeaderProps) {
  const [isPanelExpanded, setIsPanelExpanded] = useState(false)

  function togglePanel() {
    setIsPanelExpanded((v) => !v)
  }

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
              <HeaderGlobalAction
                aria-label={isPanelExpanded ? 'Close panel' : 'My account'}
                isActive={isPanelExpanded}
                onClick={togglePanel}
                aria-expanded={isSideNavExpanded}
                tooltipAlignment='end'
                id='switcher-button'
              >
                {isPanelExpanded ? (
                  <Close size={20} />
                ) : (
                  <UserAvatar size={20} />
                )}
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <HeaderPanel href='#switcher-button' expanded={isPanelExpanded}>
              <Switcher
                aria-label='My account panel'
                expanded={isPanelExpanded}
              >
                <div className='flex flex-col items-center py-5'>
                  <UserAvatar size={40} />
                  <p className='text-lg mt-2'>{props.account.name}</p>
                  <p className='font-semibold'>{props.account.email}</p>
                  <div className='flex gap-x-1 mt-2'>
                    {props.account.roles_names.map((v) => (
                      <Tag key={v} size='sm'>
                        {RoleLabel[v]}
                      </Tag>
                    ))}
                  </div>
                  <div className='flex flex-col gap-y-2 mt-4'>
                    <Button
                      as={Link}
                      renderIcon={Settings}
                      size='sm'
                      href={'/my-account/settings'}
                    >
                      Settings
                    </Button>
                    <Button
                      as={Link}
                      kind='danger--tertiary'
                      renderIcon={Logout}
                      size='sm'
                      href={'/sign-out'}
                    >
                      Sign out
                    </Button>
                  </div>
                </div>
              </Switcher>
            </HeaderPanel>
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
