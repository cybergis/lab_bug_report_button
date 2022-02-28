import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'main-menu',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { commands } = app;

    // Add a command
    const command = 'jlab-examples:main-menu';
    commands.addCommand(command, {
      label: 'Go to CyberGISX Bug report',
      caption: 'Execute jlab-examples:main-menu Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
        const bug_report_url =
          'https://github.com/cybergis/CyberGIS-Jupyter-For-Water-Bug-Reporting/issues';
        window.open(bug_report_url, '_blank');
      }
    });

    // Add the command to the command palette
    const category = 'Extension Examples';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' }
    });
  }
};

export default extension;
