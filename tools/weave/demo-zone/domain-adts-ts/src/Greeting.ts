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
export default class Greeting extends State {
  // no-arg constructor required
  public constructor() {}

  @Property
  private id: string;

  /**
   * Getter $id
   * @return { string }
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Setter $id
   * @param { string } value
   */
  public set $id(value: string) {
    this.id = value;
  }

  @Property
  private text: string;

  /**
   * Getter $text
   * @return { string }
   */
  public get $text(): string {
    return this.text;
  }

  /**
   * Setter $text
   * @param { string } value
   */
  public set $text(value: string) {
    this.text = value;
  }

  @Property
  private friendlyness: integer;

  /**
   * Getter $friendlyness
   * @return { integer }
   */
  public get $friendlyness(): integer {
    return this.friendlyness;
  }

  /**
   * Setter $friendlyness
   * @param { integer } value
   */
  public set $friendlyness(value: integer) {
    this.friendlyness = value;
  }

  @Property
  private facts: object;

  /**
   * Getter $facts
   * @return { object }
   */
  public get $facts(): object {
    return this.facts;
  }

  /**
   * Setter $facts
   * @param { object } value
   */
  public set $facts(value: object) {
    this.facts = value;
  }
}
