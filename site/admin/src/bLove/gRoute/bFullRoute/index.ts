import endpointRoute from "../aEndpointRoute";


const fullRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`,
    },
    bProtectedRoute: {
      aAutheticatedRoute: {
        aSignInRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute}`,
        bSignUpRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute}`,
        cForgotPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute}`,
        dResetPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute}`,
      },
      bAuthorizedRoute: {
        aTopbarRoute: {
          aAccountRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute}`,
          bAccountUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute}`,
          cAccountEmailUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute}`,
          dAccountPasswordUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute}`,
          eAccountDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute}`,
        },
        bSidebarRoute: {
          aSettingRoute: {
            aBaseRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}`,
            }
          },
          bUserAdministrationRoute: {
            aAccessPointRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.eDeleteRoute}`,
            },
            bMenuRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.eDeleteRoute}`,
            },
            cRoleRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.eDeleteRoute}`,
            },
            dUserRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.eDeleteRoute}`,
            },
            eProfileRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.eDeleteRoute}`,
            },
          },
          cMainRoute: {
            aDashboardRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aDashboardRoute}`,
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default fullRoute;
