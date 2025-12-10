!macro customInstall
  DetailPrint "Register grapevine URI Handler"
  DeleteRegKey HKCU "SOFTWARE\Classes\grapevine"
  WriteRegStr HKCU "SOFTWARE\Classes\grapevine" "" "URL:grapevine"
  WriteRegStr HKCU "SOFTWARE\Classes\grapevine" "URL Protocol" ""
  WriteRegStr HKCU "SOFTWARE\Classes\grapevine\shell" "" ""
  WriteRegStr HKCU "SOFTWARE\Classes\grapevine\shell\open" "" ""
  WriteRegStr HKCU "SOFTWARE\Classes\grapevine\shell\open\command" "" '"$INSTDIR\${APP_EXECUTABLE_FILENAME}" "%1"'
!macroend

!macro customUnInstall
  DetailPrint "Unregister grapevine URI Handler"
  DeleteRegKey HKCU "SOFTWARE\Classes\grapevine"
!macroend

