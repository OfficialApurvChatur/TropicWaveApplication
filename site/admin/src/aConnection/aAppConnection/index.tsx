import React from "react"
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "../bShadcnConnection/components/ui/toaster";

import endpointRoute from "@/bLove/gRoute/aEndpointRoute";

// Component
const PageNotFoundComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/aPageNotFoundComponent"));
const LoaderComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/bLoaderComponent"));
const NoInternetConnectionComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/cNoInternetConnectionComponent"));

const DashboardOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/eDashboardComponent/aDashboardOneComponent"));

const DataTableOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/fDataTableComponent/aDataTableOneComponent"));

const DataFormOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/gDataFormComponent/aDataFormOneComponent"));

const DataReadOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/hDataReadComponent/aDataReadOneComponent"));

const AuthenticationOneComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/iAuthenticationComponent/aAuthenticationOneComponent"));

const AreaChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/aAreaChartListComponent"));
const BarChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/bBarChartListComponent"));
const LineChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/cLineChartListComponent"));
const PieChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/dPieChartListComponent"));
const RadarChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/eRadarChartListComponent"));
const RadialChartListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/fRadialChartListComponent"));
const TooltipListComponent = React.lazy(() => import("@/bLove/cComponent/zSampleComponent/component/dChartComponent/gTooltipListComponent"));

// Layout
const GlobalLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout"));
const UnprotectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/aUnprotectedLayout"));
const ProtectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout"));
const AuthenticatedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/aAuthenticatedLayout"));
const AuthorizedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout"));
const TopbarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/aTopbarLayout"));
const SidebarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/bSidebarLayout"));

// Pages
const SignInPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/aSignInPage"));
const SignUpPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/bSignUpPage"));
const ForgotPasswordPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/cForgotPasswordPage"));
const ResetPasswordPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticatedPage/page/dResetPasswordPage"));

const HomePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/aHomePage"));

const AccountRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/aAccountRetrievePage"));
const AccountUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/bAccountUpdatePage"));
const AccountEmailUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/cAccountEmailUpdatePage"));
const AccountPasswordUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/dAccountPasswordUpdatePage"));
const AccountDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/aTopbarPage/page/eAccountDeletePage"));

const BaseListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/aListPage"));
const BaseCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/bCreatePage"));
const BaseRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/cRetrievePage"));
const BaseUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/dUpdatePage"));
const BaseDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/eDeletePage"));

const AccessPointListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/aListPage"));
const AccessPointCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/bCreatePage"));
const AccessPointRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/cRetrievePage"));
const AccessPointUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/dUpdatePage"));
const AccessPointDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/aAccessPointPage/eDeletePage"));

const MenuListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/aListPage"));
const MenuCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/bCreatePage"));
const MenuRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/cRetrievePage"));
const MenuUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/dUpdatePage"));
const MenuDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/bMenuPage/eDeletePage"));

const RoleListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cRolePage/aListPage"));
const RoleCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cRolePage/bCreatePage"));
const RoleRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cRolePage/cRetrievePage"));
const RoleUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cRolePage/dUpdatePage"));
const RoleDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/cRolePage/eDeletePage"));

const UserListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dUserPage/aListPage"));
const UserCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dUserPage/bCreatePage"));
const UserRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dUserPage/cRetrievePage"));
const UserUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dUserPage/dUpdatePage"));
const UserDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/dUserPage/eDeletePage"));

const ProfileListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eProfilePage/aListPage"));
const ProfileCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eProfilePage/bCreatePage"));
const ProfileRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eProfilePage/cRetrievePage"));
const ProfileUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eProfilePage/dUpdatePage"));
const ProfileDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/bUserAdministrationPage/eProfilePage/eDeletePage"));


const AppConnection = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      
      <Helmet><title>TropicWave Application</title></Helmet>
      <Toaster />

      <Routes>
        <Route element={<GlobalLayout />} >
          <Route element={<UnprotectedLayout />} >
            <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`} element={<HomePage />} />
          </Route>
          <Route element={<ProtectedLayout />} >
            <Route element={<AuthenticatedLayout />} >
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute}`} element={<SignInPage />} />
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute}`} element={<SignUpPage />} />
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute}`} element={<ForgotPasswordPage />} />
              <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute}`} element={<ResetPasswordPage />} />
            </Route>
            <Route element={<AuthorizedLayout />} >
              <Route element={<TopbarLayout />} >
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute}`} element={<AccountRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute}`} element={<AccountUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute}`} element={<AccountEmailUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute}`} element={<AccountPasswordUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute}`} element={<AccountDeletePage />} />
              </Route>
              <Route element={<SidebarLayout />} >

                {/* Base Page */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`} element={<BaseListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`} element={<BaseCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}/:id`} element={<BaseRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}/:id`} element={<BaseUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}/:id`} element={<BaseDeletePage />} />

                {/* User Administration */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute}`} element={<AccessPointListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.bCreateRoute}`} element={<AccessPointCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.cRetrieveRoute}/:id`} element={<AccessPointRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.dUpdateRoute}/:id`} element={<AccessPointUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.eDeleteRoute}/:id`} element={<AccessPointDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute}`} element={<MenuListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.bCreateRoute}`} element={<MenuCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.cRetrieveRoute}/:id`} element={<MenuRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.dUpdateRoute}/:id`} element={<MenuUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.eDeleteRoute}/:id`} element={<MenuDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.aListRoute}`} element={<RoleListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.bCreateRoute}`} element={<RoleCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.cRetrieveRoute}/:id`} element={<RoleRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.dUpdateRoute}/:id`} element={<RoleUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.eDeleteRoute}/:id`} element={<RoleDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.aListRoute}`} element={<UserListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.bCreateRoute}`} element={<UserCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.cRetrieveRoute}/:id`} element={<UserRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.dUpdateRoute}/:id`} element={<UserUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.eDeleteRoute}/:id`} element={<UserDeletePage />} />

                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.aListRoute}`} element={<ProfileListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.bCreateRoute}`} element={<ProfileCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.cRetrieveRoute}/:id`} element={<ProfileRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.dUpdateRoute}/:id`} element={<ProfileUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.eDeleteRoute}/:id`} element={<ProfileDeletePage />} />
                
                {/* Components */}
                <Route path="/dashboard" element={<DashboardOneComponent />} />

                <Route path="/area-chart" element={<AreaChartListComponent />} />
                <Route path="/bar-chart" element={<BarChartListComponent />} />
                <Route path="/line-chart" element={<LineChartListComponent />} />
                <Route path="/pie-chart" element={<PieChartListComponent />} />
                <Route path="/radar-chart" element={<RadarChartListComponent />} />
                <Route path="/radial-chart" element={<RadialChartListComponent />} />
                <Route path="/tooltip" element={<TooltipListComponent />} />

                <Route path="/data-table-one" element={<DataTableOneComponent />} />

                <Route path="/data-form-one" element={<DataFormOneComponent />} />

                <Route path="/data-read-one" element={<DataReadOneComponent />} />

                <Route path="/authentication-one" element={<AuthenticationOneComponent />} />

                <Route path="/loader" element={<LoaderComponent />} />
                <Route path="/no-internet-connection" element={<NoInternetConnectionComponent />} />
                <Route path="/page-not-found" element={<PageNotFoundComponent />} />

              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>

    </React.Fragment>
  )
}

export default AppConnection;
