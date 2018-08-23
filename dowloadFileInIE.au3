#cs ----------------------------------------------------------------------------

 AutoIt Version: 3.3.14.5
 Author:         myName

 Script Function:
	Template AutoIt script.

#ce ----------------------------------------------------------------------------

; Script Start - Add your code below here
#include <MsgBoxConstants.au3>
Sleep(5000)
Local $hIE = WinGetHandle("[Class:IEFrame]")
Local $hCtrl = ControlGetHandle($hIE, "", "[ClassNN:DirectUIHWND1]")

If WinExists($hIE,"") Then
 MsgBox($MB_ICONINFORMATION, "message", "Internet explorer browser is open ", 3)
 WinActivate($hIE,"")
 If $hCtrl Then
	 ControlSend($hIE ,"",$hCtrl,"{F6}") ; Gives focus to Open Button
     Sleep(500)
	 ControlSend($hIE ,"",$hCtrl,"{TAB}") ; Gives focus to Save Button
	 Sleep(500)
	 ControlSend($hIE ,"",$hCtrl,"{enter}") ; Submit whatever control has focus
	 Sleep(5000)
	 ControlSend($hIE ,"",$hCtrl,"{F6}") ; Gives focus to Open Button
	 Sleep(500)
	 ControlSend($hIE ,"",$hCtrl,"{ESC}"); Exit the windows promt
  Else
	 Sleep(5000)
	 MsgBox(16, "Workspace automation", "Download bar doesnt show",  3)
  EndIf

Else
 MsgBox(16, "Workspace automation", "Download bar doesnt show", 3)
 Exit(9001)
EndIf
Sleep(5000)