/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/**
 *
 */
class ExportFormat {
  static get Model() {
    return {
      _class: 'exportFormat',
      absoluteSize: 0,
      fileFormat: 'png',
      name: '',
      namingScheme: 0,
      scale: 1,
      visibleScaleType: 0,
    };
  }

  /**
   *
   * @param {Object} args
   * @param {ExportFormat.Model} json
   */
  constructor(args = {}, json) {
    if (json) {
      Object.assign(this, json);
    } else {
      Object.assign(this, ExportFormat.Model, args);
    }
    return this;
  }
}

module.exports = ExportFormat;
