import * as utils from "../utils";

const pip3Packages: string[] = [
	"argcomplete",
	"colcon-bash==0.4.1",
	"colcon-cd==0.1.1",
	"colcon-cmake==0.2.16",
	"colcon-common-extensions==0.2.1",
	"colcon-core==0.4.3",
	"colcon-defaults==0.2.2",
	"colcon-lcov-result==0.2.0",
	"colcon-library-path==0.2.1",
	"colcon-metadata==0.2.2",
	"colcon-mixin==0.1.6",
	"colcon-notification==0.2.10",
	"colcon-output==0.2.6",
	"colcon-package-information==0.3.0",
	"colcon-package-selection==0.2.5",
	"colcon-parallel-executor==0.2.4",
	"colcon-pkg-config==0.1.0",
	"colcon-powershell==0.3.6",
	"colcon-python-setup-py==0.2.2",
	"colcon-recursive-crawl==0.2.0",
	"colcon-ros==0.3.13",
	"colcon-test-result==0.3.8",
	"coverage",
	"cryptography",
	"empy",
	"flake8",
	"flake8-blind-except",
	"flake8-builtins",
	"flake8-class-newline",
	"flake8-comprehensions",
	"flake8-deprecated",
	"flake8-docstrings",
	"flake8-import-order",
	"flake8-quotes",
	"ifcfg",
	"lark-parser",
	"mock",
	"mypy",
	"nose",
	"pep8",
	"pydocstyle",
	"pyparsing",
	"pytest",
	"pytest-cov",
	"pytest-mock",
	"pytest-repeat",
	"pytest-rerunfailures",
	"pytest-runner",
	"setuptools",
	"wheel"
];

const pip3CommandLine: string[] = ["pip3", "install", "--upgrade"];

/**
 * Run Python3 pip install on a list of specified packages.
 *
 * @param   packages        list of pip packages to be installed
 * @param   run_with_sudo   whether to prefix the command with sudo
 * @returns Promise<number> exit code
 */
export async function runPython3PipInstall(
	packages: string[],
	run_with_sudo?: boolean
): Promise<number> {
	const sudo_enabled = run_with_sudo === undefined ? true : run_with_sudo;
	const args = pip3CommandLine.concat(packages);
	if (sudo_enabled) {
		return utils.exec("sudo", pip3CommandLine.concat(packages));
	} else {
		return utils.exec(args[0], args.splice(1));
	}
}

/**
 * Run Python3 pip install on a list of specified packages.
 *
 * @param   run_with_sudo   whether to prefix the command with sudo
 * @returns Promise<number> exit code
 */
export async function installPython3Dependencies(
	run_with_sudo?: boolean
): Promise<number> {
	return runPython3PipInstall(pip3Packages, run_with_sudo);
}
