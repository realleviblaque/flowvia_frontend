import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './RolesManagement.css'

export function RolesManagement({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-settings-header">
          <div className="left">
            <i className="fa-solid fa-gear"></i>
            <div className="info">
              <p className="hd-txt">Team Settings</p>
              <div>
                Manage Flowvia Team - only visible to admins
              </div>
            </div>
          </div>
        </header>
        <div className="team-settings-container">
          <TeamSettingsSidebar />
          <div className="roles-management-contents">
            <div className="top">
              <p className="hd-txt">Roles Management</p>
              <p className="txt">Updates and manage your team's roles.</p>
            </div>
            <div className="bottom">
              <div className="team-roles">
                <div className="up">
                  <div className="left">
                    <p className="hd-txt">Team Roles</p>
                    <div>
                      2 roles <span></span> 0 custom
                    </div>
                  </div>
                  <div className="right">
                    <button><i className="fa-solid fa-plus"></i> Create New Role</button>
                  </div>
                </div>
                <div className="down">
                  <div className="roles">
                    <div className="left">
                      <p className="hd-txt">Owner</p>
                      <div>
                        All permissions <span></span> Cannot be modified
                      </div>
                    </div>
                    <div className="right">
                      <button>Built-in</button>
                    </div>
                  </div>
                  <div className="roles">
                    <div className="left">
                      <p className="hd-txt">Member</p>
                      <div>
                        Default role <span></span> Basic permissions
                      </div>
                    </div>
                    <div className="right">
                      <button>Default</button>
                    </div>
                  </div>
                  <div className="roles">
                    <div className="left">
                      <p className="hd-txt">Moderator</p>
                      <div>
                        Custome
                      </div>
                    </div>
                    <div className="right">
                      <button className="delete-role">Delete Role</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roles-permission">
                <div className="up">
                  <div className="left">
                    <p className="hd-txt">Roles Permission</p>
                  </div>
                </div>
                <div className="down">
                  <div className="permissions">
                    <div className="left">
                      <p className="hd-txt"><i className="fa-solid fa-users"></i> Team Management</p>
                      <p className="txt">Controls over team-level settings and strcuture</p>
                    </div>
                    <div className="right">
                      <select>
                        <option value="none">Select Role</option>
                        <option value="moderator">Moderator</option>
                      </select>
                      <i className="fa-regular fa-exclamation"></i>
                    </div>
                  </div>
                  <div className="permissions">
                    <div className="left">
                      <p className="hd-txt"><i className="fa-regular fa-user"></i> Profile & Content</p>
                      <p className="txt">What this role can update about the tean's public presence</p>
                    </div>
                    <div className="right">
                      <select>
                        <option value="none">Select Role</option>
                        <option value="moderator">Moderator</option>
                      </select>
                      <i className="fa-regular fa-exclamation"></i>
                    </div>
                  </div>
                  <div className="permissions">
                    <div className="left">
                      <p className="hd-txt"><i className="fa-solid fa-table-cells-large"></i> Projects & Work</p>
                      <p className="txt">Project creation and management permissions</p>
                    </div>
                    <div className="right">
                      <select>
                        <option value="none">Select Role</option>
                        <option value="moderator">Moderator</option>
                      </select>
                      <i className="fa-regular fa-exclamation"></i>
                    </div>
                  </div>
                  <div className="permissions">
                    <div className="left">
                      <p className="hd-txt"><i className="fa-regular fa-credit-card"></i> Billing & Finance</p>
                      <p className="txt">Access to billing, payments, and financial data</p>
                    </div>
                    <div className="right">
                      <select>
                        <option value="none">Select Role</option>
                        <option value="moderator">Moderator</option>
                      </select>
                      <i className="fa-regular fa-exclamation"></i>
                    </div>
                  </div>
                  <div className="actions">
                    <button>Save Role Permissions</button>
                    <button>Discard Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}