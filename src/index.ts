import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyter_apod extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_apod:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter_apod is activated!');
  }
};

export default extension;
