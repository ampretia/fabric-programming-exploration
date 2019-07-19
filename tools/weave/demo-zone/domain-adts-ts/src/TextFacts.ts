import { Object as DataType, Property } from "fabric-contract-api";
import { State } from "fabric-data";

/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
@DataType
export default class TextFacts extends State {
  // no-arg constructor required
  public constructor() {}

  @Property
  private dummy: string;

  /**
   * Getter $dummy
   * @return { string }
   */
  public get $dummy(): string {
    return this.dummy;
  }

  /**
   * Setter $dummy
   * @param { string } value
   */
  public set $dummy(value: string) {
    this.dummy = value;
  }

  @Property
  private textLength: string;

  /**
   * Getter $textLength
   * @return { string }
   */
  public get $textLength(): string {
    return this.textLength;
  }

  /**
   * Setter $textLength
   * @param { string } value
   */
  public set $textLength(value: string) {
    this.textLength = value;
  }

  @Property
  private wordCount: string;

  /**
   * Getter $wordCount
   * @return { string }
   */
  public get $wordCount(): string {
    return this.wordCount;
  }

  /**
   * Setter $wordCount
   * @param { string } value
   */
  public set $wordCount(value: string) {
    this.wordCount = value;
  }
}
